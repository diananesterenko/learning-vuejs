<script setup>
import { ref , computed} from 'vue'
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
const reversedItems=computed( ()=>[...items.value].reverse())
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
const characterCount= computed( ()=>{
  return newItem.value.length
})
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
  <p class="counter">
    Character count: {{characterCount}}/200
  </p>
  <ul> 
    <li 
      v-for="({id, label,purchased, isPriority}, index) in reversedItems" 
      :key="id"
      @click="tooglePurchased(items[index])" 
      class=  "static-class"
      :class="{strikeout:purchased, priority: isPriority}">
       - {{label}}
    </li>
 </ul>
 <p v-if="items.length === 0">No items in the list</p>

 
</template>

<style scoped>
body{


  background: hsla(160, 100%, 37%, 0.2);
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.counter {
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
}

#app {
  background: hsla(160, 100%, 37%, 0.2);
  padding: 2rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 95%;
  max-width: 900px;
}

h1 {
  color: hsla(160, 100%, 37%, 1);
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #6cb2eb;
  font-size: 1.25rem;
  transition: all 0.1s ease-in;
  margin-top: 0.5rem;
  display: block;
}

a:hover {
  color: #3490dc;
}

li,
p {
  display: flex;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: #ffffff;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

li:hover {
  color: #22292f;
}

li input {
  margin: 0 0.5rem 0;
}

#shopping-list > input,
#shopping-list > select {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.add-item-form,
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}


.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.strikeout {
  text-decoration: line-through;
  color: #a3a3a3;
}

.strikeout:hover {
  color: #454545;
}

.priority {
  color: #de751f;
}
input[type="checkbox"]{
  display: inline !important;
  box-shadow: none;
  width: auto;
}
label{
  color: #d68238;
}
</style>
