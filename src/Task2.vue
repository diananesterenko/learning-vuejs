<script setup>
 import './assets/main.css' 
import { ref, reactive, watch, computed } from 'vue'
const isFinished = computed(() => currentIndex.value === blocks.value.length - 1)
const currentIndex = ref(0)
const contentP= ref([{
  id:1, text:'Основы Vue.js: Изучите основы Vue.js, включая реактивность, шаблоны, директивы и обработку событий. Поймите, как создавать простые компоненты и управлять состоянием приложения.'},
  {id:2, text:'Компоненты Vue.js: Узнайте, как создавать и использовать компоненты в Vue.js. Поймите концепцию однонаправленного потока данных (props) и событий (events) для взаимодействия между компонентами.'},
  {id:3, text:'Vue Router: Изучите Vue Router для создания одностраничных приложений (SPA). Поймите, как настраивать маршруты, навигацию и динамические маршруты.'},
  {id:4, text:'Vuex: Ознакомьтесь с Vuex для управления состоянием приложения. Поймите концепции хранилища, мутаций, действий и геттеров для централизованного управления состоянием.'},
  {id:5, text:'Composition API: Изучите Composition API, введенный в Vue 3. Поймите, как использовать функции композиции для организации и повторного использования логики в компонентах.'
}])
const blocks= ref([
  {id:1, text:'Основы', isActive:true},
  {id:2, text:'Компоненты', isActive:false},
  {id:3, text:'Роутер', isActive:false},
  {id:4, text:'Vuex', isActive:false},
  {id:5, text:'Composition', isActive:false}
])
const nextStep=()=>{
  if(currentIndex.value < blocks.value.length -1){
    // blocks.value[currentIndex.value].isActive = false
    currentIndex.value +=1
    blocks.value[currentIndex.value].isActive = true
    // console.log(currentIndex.value)
  }
}
const prevStep=()=>{
  if(currentIndex.value >=1){
  //   blocks.value[currentIndex.value].isActive = false
  currentIndex.value -=1
    blocks.value[currentIndex.value+1].isActive = false
    // console.log(currentIndex.value)
  }
  
}
const restart=()=>{
  
  isFinished.value=false
  blocks.value.forEach( (block) => {
    block.isActive = false  
  }
  )
  currentIndex.value=0
  blocks.value[0].isActive = true
} 
const goToStep = (idx) => {
  currentIndex.value = idx
  blocks.value.forEach((block, i) => {
    block.isActive = i <= idx
  })
}
</script>



<template>
   <h1>План по изучению Vue.js</h1>
   <p>{{contentP[currentIndex].text}}</p>
   <div class="buttons">
    <div class="buttonItem"  v-for="({id, text,isActive }, index) in blocks" 
        :key="id">
      <button 
        :class="{ green: isActive, done: index < currentIndex }"
        @click="goToStep(index)"
        class="btn" >
        {{ id }} 
      </button>
      <p>{{text}}</p>
    </div>
   </div>
    
   <div class="buttonItem">
    <button 
      v-if="!isFinished"
      class="btn-back btn-nav" 
      :disabled="currentIndex===0" 
      @click="prevStep()">
        Назад
    </button>
    <button 
      v-if="!isFinished"
      class="btn-next btn-nav green"  
      @click="nextStep()">{{currentIndex===blocks.length-1? 'ЗАКОНЧИТЬ' : 'ВПЕРЕД'}}
    </button>
    <button 
      v-else
      class="btn-back btn-nav"
      @click="restart()">
        НАЧАТЬ ЗАНОВО
    </button>
   </div>
</template>


<style  scoped>
p, h1{
  color: antiquewhite;
}
.buttons{
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: stretch;
}
.buttonItem{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.buttons .btn{
  flex:1;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}




.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}
.btn-nav{
  
   padding: 14px 30px 14px 30px;
  
  margin-top: 15px;
 font-size: 24px;
 text-transform: uppercase;
  border-radius: 40px;
}
.green{
  background-color: #539255; 
  color: white;
}
.done{
  border-color: #021a04;
  border-width: 3px;
  border-style: solid;
  color: #011c02;
  opacity: 0.8;
  
}
</style>