<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><RouterLink to="/dashboard">Главная</RouterLink></li>
      <li>
        <RouterLink to="/mail" custom v-slot="{navigate, href} ">
            <a 
                href="#" 
                @click="navigate"
                :class="{ active: $route.path.startsWith('/mail') }"
            >Почта</a>
        </RouterLink>
      </li>
      <li><a href="#" @click.prevent="auth.logout">Выйти</a></li>
    </ul>
  </header>
</template>

<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router';
const auth = inject('auth')
const props= defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

</script>