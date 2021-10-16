<template>
<div class="chat-window">
  <div v-if="error">{{error}}</div>
  <div v-if="documents" class="messages" ref="messages">
    <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
      <span class="created-at">{{doc.createdAt}}</span>
      <span class="name">{{doc.name}}</span>
      <span class="message">{{doc.message}}</span>
    </div>
  </div>
</div>
</template>

<script setup>

import { formatDistanceToNow } from 'date-fns'
// Require Italian locale
import { it } from 'date-fns/locale'

import getCollection from "@/composables/getCollection";
import {computed, onUpdated, watchEffect} from "vue";
import {ref} from "vue";
const  name = "ChatWindows"
const {error,documents} = getCollection("messages")

//auto-scroll
const messages=ref(null) //ref al template


const formattedDocuments = computed(()=>{
  if(documents.value){
    return documents.value.map(doc=>{
      let time = formatDistanceToNow(doc.createdAt.toDate(),{locale:it})
      return {...doc, createdAt:time, id:doc.id}
    })

  }
})

onUpdated(()=>{
  messages.value.scrollTop =messages.value.scrollHeight
})


</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single{
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
