<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script setup >
import {  ref, computed } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useTaskStore } from '@/store/storeTask9.js'
import router from '@/router/routerTask9';

const taskStore = useTaskStore()
const {addTask} = taskStore


const title = ref('')
const date = ref('')
const description = ref('')
const isValid = computed(() => title.value !== '' && description.value !== '' && date.value !== '')
const today = new Date().toISOString().slice(0, 10)

const submit = () => {
  
  addTask({ id: Date.now(), title: title.value, status: date.value < today ?'cancel':'active', deadline: date.value, description: description.value })
  console.log(title.value, date.value, description.value)
  title.value = ''
  date.value = ''
  description.value = ''
  router.push('/')
}
onBeforeRouteLeave((to, from, next) => {
  if (title.value !== '' || date.value !== '' || description.value !== '') {
    const answer = window.confirm('У вас есть несохранённые данные. Вы уверены, что хотите покинуть страницу?')
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})
</script>