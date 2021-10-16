<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>

  </div>

</template>

<script setup>
import Navbar from "@/components/Navbar";
import {projectAuth} from "@/firebase/config";
import {watch} from "vue";

import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm";
import ChatWindow from "@/components/ChatWindow";

const name =  "Chatroom"
const {user} = getUser()
const router = useRouter()

// watch(user,()=>{
//   if(!user.value){
//     //LOGGED OUT!!?!
//     console.log("PUSH TO HOME")
//     router.push({name: 'Welcome'})
//   }
// })

</script>

<style scoped>

</style>
