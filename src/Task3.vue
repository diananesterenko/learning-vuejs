<script setup>
import Comp1Task3 from './components/Task3/Com1Task3.vue'
import { computed, ref } from 'vue';

const now = new Date().toLocaleDateString()
const news = ref([
    { id: 1, title: 'News item 1', isOpen: false, isRead: false },
    { id: 2, title: 'News item 2', isOpen: false, isRead: false },
    { id: 3, title: 'News item 3', isOpen: true,  isRead: false  }
])
const toggleNews = (id) => {
  const item = news.value.find(n => n.id === id)
  if (item) item.isOpen = !item.isOpen
}
const readRate = ref(0)
const increaseReadRate = (id) => {
  readRate.value += 1
  const item = news.value.find(n => n.id === id)
  item.isRead = true
}
const unreadNews =computed(() => news.value.filter(n => !n.isRead))
const provides= def
</script>


<template>
    <div>
        <header>
        <h2>Hot NEWS {{ now }}</h2>
        <hr/>
        <span> News read : <strong>{{ readRate }}</strong></span>
        </header>
        <template v-if="unreadNews.length>0">
        <Comp1Task3 
        v-for="item in unreadNews"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :isOpen="item.isOpen"
        :isRead="item.isRead"
        @toggle="toggleNews"
        @readRate="increaseReadRate"
        />
        </template>

        <template v-else >
            <p>You have read all news</p>
        </template>
    </div> 
</template>
<style scoped>
header{
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: #f9f9f9;
}
</style>