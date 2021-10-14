<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{user.displayName}}</p>
      <p class="email">Currenty logged in as {{user.email}}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
import useLogout from "@/composables/useLogout";
import {useRouter} from "vue-router";
import getUser from "@/composables/getUser";



const {user} = getUser()


const router = useRouter()
const  name =  "Navbar"
const {logout,error} = useLogout()


const handleClick = async ()=>{
  await logout()
  if(!error.value){
    console.log("USER LGOGED OUT - - - -")
    router.push({name: 'Welcome'})
  }
}

</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email{
  color: #999;
  font-size: 14px;
}
</style>
