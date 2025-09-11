<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

    const goToLogin = () => {
        router.push('/login')
    }
</script>