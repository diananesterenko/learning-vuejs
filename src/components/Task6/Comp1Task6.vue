<template>
    <div v-if="people.length!==0">
        <h2>People List</h2>
        <hr />
        <div class="card line" v-for="person in people" :key="person.id">
            <h3>{{ person.firstName }}</h3>
            <button @click="emit('remove', person.id)" class="btn danger">Delete</button>
            
        </div>
    </div>
    <div v-else>
        <h2>No people found</h2>
        <hr />
        <p>Try to create one </p>
        <h3>OR</h3>
        <button @click="emit('load')" class="btn">Load existing list </button>
    </div>

</template>

<script setup>
const props = defineProps({
    people:Array
})
const emit = defineEmits(['load', 'remove'])
</script>


<style  scoped>
.line{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>