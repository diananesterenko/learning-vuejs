<template>
    <form class="card card-w30"  @submit.prevent="submit">
      <div class="form-control">
        <label for="type">Type of block</label>
        <select id="type" v-model="type">
          <option value="title">Title</option>
          <option value="subtitle">Subtitle</option>
          <option value="avatar">Avatar</option>
          <option value="text">Text</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Value</label>
        <textarea 
            id="value" 
            rows="3" 
            v-model="value"
            placeholder="Type atleast 3 characters"
        ></textarea>
      </div>

      <button 
        class="btn primary" 
        :disabled = "value.length < 3"
        >Add
      </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
const emit= defineEmits(['block-added'])

const value = ref('');
const type = ref('title');
const info=ref('');

const submit = () => {
   emit('block-added', {
        type: type.value,
        value: value.value,
        id: Date.now()
      })
      value.value = '';
      type.value = 'title'; 
};

</script>

<style  scoped>

</style>