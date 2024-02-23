// store/index.js
import axios from 'axios';
import { createStore } from 'vuex';


export default createStore({
  state: {
    weatherData: null,
    isLoading:false,
    error:""
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
    setIsLoading(state,isLoading){
      state.isLoading=isLoading;
    },
    setError(state,error){
      state.error=error;
    }
    
  },
  actions: {
    showLoading({commit}){
      commit("setIsLoading",true)
    },
    hideLoading({commit}){
      commit("setIsLoading",false)
    },

    async fetchWeatherData({ commit,dispatch }, location) {
      try {
        dispatch("showLoading");
        commit('setWeatherData',"")
        commit('setError',"")

       
        const osmResponse = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
        const osmData =  osmResponse.data
    
        console.log ("tEST", osmResponse, " ===== ", osmData)

        if(osmData.length>0 && osmData[0].lat && osmData[0].lon){
        const { lat, lon } = osmData[0]; 

        
        const apiKey = '03da9a5862b08e874d9af578d0700c0b';
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const weatherData =  weatherResponse.data;

        
       
        commit('setWeatherData', {
          city: weatherData.name,
          latitude: lat,
          longitude: lon,
          weather: weatherData.weather[0].main,
          description: weatherData.weather[0].description,
          temperature: weatherData.main.temp,
          pressure: weatherData.main.pressure,
          tempMin: weatherData.main.temp_min,
          tempMax: weatherData.main.temp_max,
          cloudiness: weatherData.clouds.all,
          rainVolume: weatherData.rain ? weatherData.rain['1h'] : 0,

        });
      }
      else {
        commit('setError',"City not found");
      }
      } catch (error) {
        console.error('Error fetching weather data:', error);        
      }
      finally {dispatch("hideLoading")};
      
    },
  },
  getters: {
    isLoading(state){
      return state.isLoading;
    },
    errorWeather(state){
      return state.error;
    },

    
    getWeatherData: state => state.weatherData,
  },
});
