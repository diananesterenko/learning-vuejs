<script setup>  
import { defineProps, defineEmits } from 'vue'
import ButtonTask3 from './ButtonTask3.vue'
const props=defineProps({ //то что принимаем 
    title: String,
    id: Number,
    isOpen: Boolean,
    isRead: Boolean
    
})
const emit = defineEmits(['toggle', 'readRate'])//то что отдаем наверх
const toggleOpen = () => {
  emit('toggle', props.id)
}
const readNews = () => {
  //props.isRead = true
  emit('readRate', props.id)
//   emit('read', props.id)
console.log(props.isRead);
  
}

</script>

<template>


    <div  class="news-item">
        <h3>{{ title }}</h3>
        <ButtonTask3 @action="toggleOpen" >
            {{isOpen ? 'Закрыть' : 'Открыть'}}
        </ButtonTask3>
        <div v-if="isOpen">
        <hr/>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, rerum non corporis quam, illo a distinctio suscipit praesentium vero quisquam eaque? Mollitia iusto ex nostrum distinctio nemo sint, repellendus vel.</p>
            <ButtonTask3  
                @action="readNews" 
                color="readbtn">
                I read it
            </ButtonTask3>
        </div>
    </div>
    
</template>

<style scoped>
.btn{
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border: 1px solid #4e9568;
    border-radius: 5px;
    background-color: #f9f9f9;
    color: #4e9568;
    cursor: pointer;
    border-radius: 15px;
    font-size: 15px;
}
.news-item {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: #f9f9f9;
}       

.readbtn{
    background-color: #4e9568;
    color: white;
}
</style>