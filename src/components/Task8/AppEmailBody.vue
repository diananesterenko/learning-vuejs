<template>
  <div v-if="email">  
    <h2>{{email.theme}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    <h2>Выберите письмо</h2>
    <p>Письмо не выбрано</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { inject } from 'vue';
const emails = inject('emails');
const props = defineProps({
  mailId : String
});
const email =computed(() => {
  return props.mailId ? emails.find(e => e.id === parseInt(props.mailId)) : null;
});
</script>

<style scoped>

</style>