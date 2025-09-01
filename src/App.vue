<script setup>


import { ref } from 'vue'


const header = ref('Shopping list app')
const editing = ref(false)
const items = ref([
  {id:1, label:'Milk', purchased: false, isPriority: true},
  {id:2, label: 'Bread', purchased: true, isPriority: false},
  {id:3, label: 'Eggs', purchased: false , isPriority: false}
  ])
const newItem = ref("")
const NewItemHighPriority = ref(false)
const isPriority = ref(false)
const saveItem =() =>{
  items.value.push({ id: items.value.length+1, label: newItem.value, isPriority: NewItemHighPriority.value})
  newItem.value = ""
  NewItemHighPriority.value = ""
}
const doEdit=(e) =>{
  editing.value = e
  newItem.value = ""
  NewItemHighPriority.value = ""
}
const tooglePurchased=(item)=>{
  item.purchased= !item.purchased
}
</script>

<template>
  <div class="header">
    <h1>{{header}}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
   <button v-else @click="doEdit(true)"
        class="btn btn-primary">
        Add Item
      </button>
  </div>
  <form 
    class="add-item-form" 
    v-if = "editing"
    @submit.prevent="saveItem" >
      <input 
        v-model.trim="newItem" 
        type="text" placeholder= "Add an item" 
      />
      <label>
        <input type="checkbox" v-model="NewItemHighPriority" />
        High Priority
      </label> 
      <button 
        v-bind:disabled= "newItem.length === 0"
        class="btn btn-primary" >
        Save Item
      </button>
  </form>
  <ul> 
    <li 
      v-for="({id, label,purchased, isPriority}, index) in items" 
      :key="id"
      @click="tooglePurchased(items[index])" 
      class=  "static-class"
      :class="{strikeout:purchased, priority: isPriority}">
      {{index+1}}. {{label}}
    </li>
 </ul>
 <p v-if="items.length === 0">No items in the list</p>

 
</template>

<style scoped>
h1{
  color: #42b983;
  font-weight: normal;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
