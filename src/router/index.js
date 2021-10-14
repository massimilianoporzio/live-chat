import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome'
import Chatroom from "@/views/Chatroom";
import {projectAuth} from "@/firebase/config";

//auth guard
const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser
  console.log('Current user i nauth guard:',user)
  if (!user){
    console.log('AUTH GUARD: NOT LOGGED IN')
    next({name:'Welcome'})
    return;
  }else{
    console.log("NEXT!")
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
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
