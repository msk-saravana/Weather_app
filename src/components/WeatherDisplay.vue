<template>
  
  <div v-if="weatherData" class="weather-info">
    <h2 class="wts">{{ weatherData.city }}</h2>
    <p class="wts">Latitude: {{ weatherData.latitude }}</p>
    <p class="wts">Longitude: {{ weatherData.longitude }}</p>
    <p class="wts">Weather: {{ weatherData.weather }}</p>
    <p class="wts">Description: {{ weatherData.description }}</p>
    <p class="wts">Temperature: {{ weatherData.temperature }}°C</p>
    <p class="wts">Air Pressure: {{ weatherData.pressure }} hPa</p>
    <p class="wts">Min Temperature: {{ weatherData.tempMin }}°C</p>
    <p class="wts">Max Temperature: {{ weatherData.tempMax }}°C</p>
    <p class="wts">Cloud Cover: {{ weatherData.cloudiness }}%</p>
    <p class="wts" v-if="weatherData.rainVolume">Rain in Next Hour: {{ weatherData.rainVolume }} mm</p>
  </div>
  
</template>

<script>
export default {
  computed: {
    weatherData() {
      return this.$store.getters.getWeatherData;
    }
  }
}
</script>

<style scoped>
.weather-info {
  position: fixed;
  top: 68%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: #c3c2df;
  border-radius: 10px;
}

/* Responsive styles */
@media (max-width: 350px) {
  .weather-info {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 40%; /* Adjust the width for even smaller screens */
    padding: 10px; /* Adjust the padding for even smaller screens */
    font-size: 0.8rem; /* Further decrease font size for even smaller screens */
    text-align: center;
  }
}

@media (max-width: 576px) {
  .weather-info {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 20%; 
    padding: 10px; 
    font-size: 0.8rem; 
    text-align: center;
  }
}
@media (max-width: 759px) {
  .weather-info {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%); 
    width: 10%;
    padding: 15px; 
    font-size: 0.9rem; 
    text-align: center;
    margin-left: 20px;


  }
}
@media(max-width:976px){
  .weather-info {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 55%; /* Adjust the width for even smaller screens */
    padding: 10px; /* Adjust the padding for even smaller screens */
    font-size: 0.8rem; /* Further decrease font size for even smaller screens */
    text-align: center;
  }
}


@media(max-width:1550px){
  .weather-info {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 70%; /* Adjust the width for even smaller screens */
    padding: 10px; /* Adjust the padding for even smaller screens */
    font-size: 0.8rem; /* Further decrease font size for even smaller screens */
    text-align: center;
  }
}
.wts{
  border:1px solid rgba(136, 124, 129, 0.933);
  border-radius: 10px;
  padding: 5px;
  margin:5px
}
</style>
