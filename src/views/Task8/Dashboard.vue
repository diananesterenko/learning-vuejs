<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :</p>

    <router-link :to="{name: 'mail'}">To Mail</router-link>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';


onBeforeRouteLeave ((to, from, next) => {
  confirm('Are you sure you want to leave?') ? next() : next(false);
})
</script>

<style scoped>

</style>