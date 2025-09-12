<template>
  <span :class="['badge', checkType()]">{{ props.type }}</span>
</template>
<script setup>
const checkType = () => {
  if (props.type === 'active') return 'primary'
  if (props.type === 'in-progress') return 'warning'
  if (props.type === 'done') return 'danger'
  if (props.type === 'cancel') return 'cancel'
  return 'badge-default'
}
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>