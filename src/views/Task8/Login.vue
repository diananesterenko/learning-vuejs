<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <RouterLink to="/forget" >
        <button class="btn warning">Забыл пароль?</button>
    </RouterLink>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { inject } from 'vue'
const auth = inject('auth')
const router = useRouter()
const email = ref('')
const password = ref('')
const isValid = computed(() => email.value !== '' && password.value !== '')
const submit = () => {
  if (isValid.value) {
    auth.login()
  }
}

</script>

<style scoped>

</style>