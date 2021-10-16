<template>
  <form>
    <textarea
        placeholder="Type a message and hit enter to send..."
        v-model="message"
        @keypress.enter.prevent = handleSubmit
    ></textarea>
    <div class="error">{{error}}</div>
  </form>
</template>

<script setup>

import {ref} from "vue";
import getUser from "@/composables/getUser";
import {serverTimestamp } from "firebase/firestore";
import useCollection from "@/composables/useCollection";

const name = "NewChatForm"
const message = ref('')
const {user} = getUser()

const {addDocument,error} = useCollection('messages')

const handleSubmit = async ()=>{
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: serverTimestamp()
  }

  await addDocument(chat)
  
  if(!error.value){

    message.value=''
  }

}

</script>

<style scoped>
form {
  margin: 10px
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
