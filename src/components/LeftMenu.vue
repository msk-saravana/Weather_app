<template>
  <div class="left-menu">
    <p class="p" @click="toggleDropdown"><b>☰ Weather app</b></p>
    <div v-if="showDropdown" class="dropdown-menu">
      <button @click="welcome" class="btn btn-primary"><svg  xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 576 512" class="icon"> <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>Home</button>
      <br>
      <button @click="toggleWeatherForm"  class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 640 512" class="icon"> <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>Weather</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleWeatherForm() {
      this.$emit('toggle-weather-form');
    },
    welcome() {
      this.$emit('welcome-message');
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
}
</script>

<style scoped>
.left-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 15%; /* Adjust minimum width as needed */
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; 
  padding: 10px; 
}

.p {
  cursor: pointer; 
}

.dropdown-menu {
  margin-top:40px;
  margin-left:20px;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
}

.btn-primary {
  width: 80%;
} 
.p {
  width: 100%;
  font-size: 1.5rem;
  color: antiquewhite;
  text-align: center;
} 
.icon{
  fill:orange;
  margin-bottom: 5px;
}
</style>


