import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
   path:'/LeftMenu',
   component:'LeftMenu'
    },
    {
      path:'/WeatherSearchForm',
      component:'WeatherSearchForm'
    },
{ path:'/isLoading',
    component:'isLoading'
    },
    { path: '/weather', 
     component: 'WeatherDisplay' },




    
  ]
})

export default router
