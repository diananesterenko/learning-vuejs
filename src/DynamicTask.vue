<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const route = useRoute()

const component = computed(() => {
  switch (route.params.id) {
     case "1":
      return defineAsyncComponent(() => import('./App1.vue'))
    case "2":
      return defineAsyncComponent(() => import('./Task2.vue'))
    case "3":
      return defineAsyncComponent(() => import('./Task3.vue'))
    case "4":
      return defineAsyncComponent(() => import('./Task4.vue'))
    case "5":
      return defineAsyncComponent(() => import('./Task5.vue'))
    case "6":
      return defineAsyncComponent(() => import('./Task6.vue'))
    case "7":
      return defineAsyncComponent(() => import('./Task7.vue'))
    case "8":
      return defineAsyncComponent(() => import('./Task8.vue'))
    case "9":
      return defineAsyncComponent(() => import('./Task9.vue'))
    default:
      return defineAsyncComponent(() => import('./components/Task8/NotFound.vue'))
  }
})
</script>

<template>
  <component :is="component" />
</template>