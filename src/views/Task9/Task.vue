<template>
  <div class="card" :taskId="route.params.id" v-if="currentTask">
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.deadline }}</p>
    <p><strong>Описание</strong>: {{currentTask.description}}</p>
    <div>
      <button class="btn" @click="setStatus('in-progress')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancel')">Отменить</button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script setup>
import AppStatus from '@/components/Task9/AppStatus.vue';
import { useRoute, useRouter } from 'vue-router';
import { inject, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/store/storeTask9.js'

const taskStore = useTaskStore()
const {tasks} = storeToRefs(taskStore)
const route = useRoute();
const router = useRouter();
const taskId = route.params.id
const currentTask = computed(() => tasks.value.find(t => String(t.id) === String(taskId)))

const setStatus =(status) => {
  if (currentTask.value) {
    currentTask.value.status = status
    
  }
  router.push(`/`)

}
</script>

<style scoped>

</style>