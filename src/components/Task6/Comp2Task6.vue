<template>
    <div class="alert" v-if="alert" :class="alert.type">
        <h3>{{ alert.title }}</h3>
        <p>{{ alert.text }}</p>
        <button @click="$emit('close')" class="btn" :class="alert.type"> Close </button>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps({
    alert: Object
})
</script>

<style  scoped>

</style>