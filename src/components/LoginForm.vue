<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Log in</button>
  </form>
</template>

<script setup>
import {ref} from "vue"

const name = "SignupForm"
const email =ref('')
const password = ref('')

const handleSubmit = ()=>{

  console.log(email.value)
  console.log(password.value)
}
</script>

<style scoped>

</style>
