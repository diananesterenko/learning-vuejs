<template>
  <div class="not-found">
    <h2>404 - Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterLink to="/login">Go to Login</RouterLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
    color: aliceblue;
  text-align: center;
  padding: 2rem;
}
</style>