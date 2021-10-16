import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome'
import Chatroom from "@/views/Chatroom";
import {projectAuth} from "@/firebase/config";

//auth guard
const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser

  if (!user){
    console.log('AUTH GUARD: NOT LOGGED IN')
    next({name:'Welcome'})
    return;
  }else{
    console.log("NEXT!")
    next()
  }
}

// if logged in there is no need to auth
const requireNoAuth = (to,from,next)=>{
  let user = projectAuth.currentUser
  //SE PRESENTE
  if (user){
    next({name:'Chatroom'})
    return;
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: [requireNoAuth]
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: [requireAuth]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
