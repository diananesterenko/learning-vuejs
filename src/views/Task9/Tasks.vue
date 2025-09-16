<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Active tasks: {{ checkActive()}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{task.deadline}}
          </small>
        </strong>
      </p>
      <!-- <RouterLink :to="`/task/${task.id}`"> -->
      <button class="btn primary" @click="goToTask(task.id)">Посмотреть</button>
      <!-- </RouterLink> -->
    </div>
  </template>
</template>

<script setup>
import AppStatus from '@/components/Task9/AppStatus.vue';
import router from '@/router/routerGlobal.js';
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/store/storeTask9.js'

const taskStore = useTaskStore()
const {tasks} = storeToRefs(taskStore)


const checkActive = () => {
  return tasks.value.filter(t => t.status === 'active' || t.status === 'in-progress').length
}
const goToTask = (id) => {
  router.push(`/task9/task/${id}`)
}
</script>