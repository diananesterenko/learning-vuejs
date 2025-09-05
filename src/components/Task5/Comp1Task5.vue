<template>
     <div class="form-control" :class="{ invalid: error }">
        <label for="id">{{ label }}</label>
        <input 
            :value="modelValue"
            type="text" 
            :id="id" 
            :placeholder="placeholder"
            @input="change">
        <small v-if="error">{{ error }}</small>
      </div>
</template>

<script setup>
const props = defineProps({
    error: String,
    label : String,
    placeholder: String,
    modelValue: String
   
})
const id = 'input-' + Math.random()
const emit = defineEmits(['update:modelValue'])
const change =(event)=>{
    emit('update:modelValue', event.target.value)
}

</script>
<style scoped>

</style>