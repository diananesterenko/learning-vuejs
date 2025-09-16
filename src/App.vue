<template>
  <!--<h1 class="text-white center">Select Task</h1>-->

    <div class="card" v-for="task in tasks" :key="task.id" v-if="route.path === '/'">
      <h2 class="card-title">
        {{task.title}}
      </h2>
     
      <!-- <RouterLink :to="`/task/${task.id}`"> -->
      <button class="btn primary" @click="goToTask(task.id)">Look</button>
      <!-- </RouterLink> -->
    </div>
    <div v-else>
        <RouterView />
        <hr />
        <RouterLink to="/" >
        <button > Go to Main</button>
        </RouterLink>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/routerGlobal.js';
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id


 const tasks = ref(
       [{ id: 1, title: "Task 1"},
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
        { id: 4, title: "Task 4" },
        { id: 5, title: "Task 5" },
        { id: 6, title: "Task 6" },
        { id: 7, title: "Task 7" },
        { id: 8, title: "Task 8" },
        { id: 9, title: "Task 9" }]
    );
const goToTask = (id) => {
    console.log(id)
  router.push(`/app/${id}`)
}
</script>
<style >
body {
  background: #ffffff;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>