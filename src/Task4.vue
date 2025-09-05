<template>
    <div>
 <h2>Dynamic components</h2>
</div>
<ButtonTask3 
    :color="oneColor"
    @action="active='one'"
>One</ButtonTask3>
<ButtonTask3 
    :color="twoColor"
    @action="active ='two'" 
    
>Two</ButtonTask3>
<KeepAlive>
<component :is="componentName"></component>
</KeepAlive>
</template>

<script setup>
import { computed, ref, defineAsyncComponent } from 'vue';
import ButtonTask3 from './components/Task3/ButtonTask3.vue';
import Comp1Task4 from './components/Task4/Comp1Task4.vue';
import Comp2Task4 from './components/Task4/Comp2Task4.vue';
const active= ref('one');
const componentName=computed(() => {
    return active.value === 'one' ? Comp1Task4 : Comp2Task4
});
const oneColor=computed(() => active.value === 'one' ? 'readbtn' : ''); 
const twoColor=computed(() => active.value === 'two' ? 'readbtn' : '');
</script>

<style scoped>
.btn{
    margin: 15px;
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

.readbtn{
    background-color: #4e9568;
    color: white;
}
</style>