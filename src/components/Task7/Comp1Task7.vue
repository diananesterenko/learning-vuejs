<template>
   
      <h1 v-if="props.type === 'title'">{{ props.value }}</h1>
      <h2 v-else-if="props.type === 'subtitle'">{{ props.value }}<hr/></h2>
      <p v-else-if="props.type === 'text'">{{ props.value }}</p>
       
      <div v-else-if="props.type === 'avatar'" class="avatar">
        <img :src="props.value" />
      </div>
      
    
</template>

<script setup>
const props = defineProps({
  value: String,
  type: String
});





//Резюме Nickname
//https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png
//Опыт работы
//главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз 




</script>

<style  scoped>

</style>