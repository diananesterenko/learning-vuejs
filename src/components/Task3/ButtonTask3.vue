<script setup>
import { defineProps, defineEmits } from 'vue'
const emit = defineEmits(['action'])//то что отдаем наверх
const props=defineProps({ //то что принимаем 
    color:String
})

</script>

<template>
    <button class="btn"  :class="color" @click="emit('action')"><slot></slot></button>
</template>

<style scoped>

</style>