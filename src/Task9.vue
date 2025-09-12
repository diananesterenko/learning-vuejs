<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
   <router-view />
  </div>
</template>

<script setup>

import TheNavbar from './components/Task9/TheNavbar.vue'
import { RouterView } from 'vue-router';

</script>

<style>

</style>