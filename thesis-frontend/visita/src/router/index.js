import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SeaView from '../views/SeaView.vue';
import MountainView from '../views/MountainView.vue'
import CityView from '@/views/CityView.vue';
import TravelView from '@/views/TravelView.vue';
import LoginRegister from '@/views/LoginRegister.vue';
import ProfileView from '@/views/ProfileView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login-register',
    name: 'loginRegister',
    component: LoginRegister,
  },
  {
    path: '/mare',
    name: 'sea',
    component: SeaView,
  },
  {
    path: '/montagna',
    name: 'mountain',
    component: MountainView,
  },
  {
    path: '/citta',
    name: 'city',
    component: CityView,
  },
  {
    path: '/viaggio',
    name: 'travel',
    component: TravelView,
  },
  {
    path: '/profilo/',
    name: 'profile',
    component: ProfileView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next)=>{
  

  // Get the encoded cookie value
  const encodedCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, "$1")
  
  // Decode the cookie value
  const cookieValue = decodeURIComponent(encodedCookieValue)
  if(to.name === "loginRegister" && cookieValue){
    next({
      name: 'profile'
    })
  }
  if(cookieValue){
    next()
  }
  else{
    next({name: 'home'})
  }

}) 
export default router;
