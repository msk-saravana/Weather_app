<template>
  <div id="app">
    <LeftMenu @toggle-weather-form="toggleWeatherForm" @welcome-message="displayWelcomeMessage" />
    <WeatherSearchForm :showForm="showWeatherForm" />
    <div class="main-content">
      <h1 v-if="showWelcomeMessage" class="welcome-message"><b>Welcome to the Weather App!</b></h1>
    </div>
    <isLoading/>
    
    <div class="wt"><WeatherDisplay/></div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import WeatherSearchForm from './components/WeatherSearchForm.vue';
import WeatherDisplay from './components/WeatherDisplay.vue';
import isLoading from './components/isLoading.vue';

export default {
  components: {
    LeftMenu,
    WeatherSearchForm,
    WeatherDisplay,
    isLoading
  },
  data() {
    return {
      showWeatherForm: false,
      showWelcomeMessage: false
    };
  },
  methods: {
    toggleWeatherForm() {
      this.showWeatherForm = !this.showWeatherForm;
    },
    displayWelcomeMessage() {
      this.showWelcomeMessage = true;
    }
  }
}
</script>

<style>

.welcome-message {
  position: fixed;
  top: 20px; 
  left: 60%;
  transform: translateX(-50%);
  font-size: 24px; 
  color: #094a6d;
  z-index: 999; 
  
}


@media screen and (max-width: 1500px) {
  .main-content {
    width: 80%; 
    margin: 0 auto; 
    padding: 20px;
  }
}


</style>
