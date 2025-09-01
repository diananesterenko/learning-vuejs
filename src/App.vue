<script setup>


import { ref } from 'vue'


const header = ref('Shopping list app')
const items = ref([
  {id:1, label:'Milk'},
  {id:2, label: 'Bread'},
  {id:3, label: 'Eggs'}
  ])
</script>

<template>
  <h1>{{header}}</h1>
  <ul> 
    <li v-for="({id, label}, index) in items" :key="id">{{index}}. {{label}}</li>
 </ul>
 
</template>

<style scoped>
h1{
  color: #42b983;
  font-weight: normal;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
