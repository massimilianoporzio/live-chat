<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Log in</button>
  </form>
</template>

<script setup>
import {markRaw, ref} from "vue"
import useLogin from "@/composables/useLogin";

const name = "LoginForm"
const email =ref('')
const password = ref('')
const {error,login} = useLogin()

const handleSubmit = async ()=>{
  await login(email.value, password.value)
  if(!error){
    console.log('USER LOGGED IN')
  }
 console.log(error.value)
}
</script>

<style scoped>

</style>
