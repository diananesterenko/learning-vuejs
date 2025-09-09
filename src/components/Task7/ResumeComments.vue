<template>
     <p>
      <button class="btn primary" @click="$emit('load-comments')">Upload Comments</button>
    </p>
    <div class="card">
      <h2>Comments</h2>
      <ul class="list">
        <li class="list-item" v-for="comment in props.comments" :key="comments.id">
          <div>
            <p><strong>{{ comment.email }}</strong></p>
            <small>{{comment.body}}</small>
            <hr/>
          </div>
        </li>
      </ul>
    </div>
    
</template>

<script setup>
const emit = defineEmits(['load-comments']);
const props = defineProps({
  comments: {
    type: Array,
    required: true
  }
})
</script>

<style  scoped>

</style>