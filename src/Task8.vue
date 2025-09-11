<template>
  <the-navbar :visible="isAuthenticated"></the-navbar>
  <div class="container with-nav">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router';
import TheNavbar from './components/Task8/TheNavbar.vue';
import { provide, ref } from 'vue'

const router = useRouter()
const route = useRoute()
const isAuthenticated = ref('false')
const emails = [
  {id: 1, theme: 'Купил себе PlayStation 5'},
  {id: 2, theme: 'Выучил Vue Router'},
  {id: 3, theme: 'Хочу изучить весь Vue'},
  {id: 4, theme: 'А следующий блок про Vuex!'},
  {id: 5, theme: 'А что там на счет Vue Hooks?'}
]

const login=()=>{
  isAuthenticated.value=true
  if(route.query.page){
    router.push(route.query.page)
  }else{
    router.push('/dashboard')
  }
}   
const logout=()=>{
  isAuthenticated.value=false
  router.push({
    path:'/login',
    query: { page: route.path }
  })
}
provide('emails', emails)
provide('auth', { login, logout, isAuthenticated })
</script>

<style>
</style>