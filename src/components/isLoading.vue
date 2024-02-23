<!-- IsLoading.vue -->

<template>
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner-container">
        <font-awesome-icon icon="spinner" :spin = "true" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faSpinner } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faSpinner);
  
  export default {
  components: {
      FontAwesomeIcon,
    },
    data() {
      return {
  
      };
    },
   computed:{
      ...mapGetters(["isLoading"])
   },
  };
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .spinner-container {
    font-size: 3em;
    color: white;
    
  }
  </style>