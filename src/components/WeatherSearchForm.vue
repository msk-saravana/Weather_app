<template>
  <div>
  <div v-if="showForm" class="weather-search-form">
    <input type="text" v-model="location" placeholder="Enter location" class="form-control mb-2">
    <button @click="searchWeather"  class="btn btn-primary" :disabled= "v$.location.minLength.$invalid || v$.location.required.$invalid">
      Search</button> 
  </div>
  <div class="error" v-if="errorWeather">
    <h1>{{ errorWeather }}</h1>
  </div>
</div>
  
</template>

<script>
import { ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
import { useVuelidate} from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default {
  props: ['showForm'],
  setup() {
    const location = ref('');
    const store = useStore();

    const searchWeather = () => {
      console.log(location.value); 
      
      store.dispatch('fetchWeatherData', location.value);
    };

    return {
      location,
      searchWeather,
      v$: useVuelidate()
    };
  },
  computed:{
    ...mapGetters(["errorWeather"])
  },
  validations(){
    return{
      location:{
        required,
        minLength:minLength(2)
      }
    }
  },
};
</script>

<style scoped>
.weather-search-form {
  position: fixed;
  top: 13%;
  left: 60%;
  transform: translateX(-50%);
  background-color: #c3c2df;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 60%; 
  z-index: 999; 
}

.btn-primary {
  width: 100%;
}
@media screen and (min-width: 340px) {
  .weather-search-form {
    width: 10%;
  }
}
@media screen and (min-width: 560px) {
  .weather-search-form {
    width: 40%; 
  }
}
@media screen and (min-width: 788px) {
  .weather-search-form {
    width: 55%; 
  }
}

@media screen and (min-width: 992px) {
  .weather-search-form {
    width: 55%; 
  }
}

@media screen and (min-width: 1230px) {
  .weather-search-form {
    width: 70%; 
  }
}
.error{
  margin-left:43%;
  margin-top:25%;
  color:red;
}
</style>
