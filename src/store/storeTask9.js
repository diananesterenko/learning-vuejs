import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTaskStore = defineStore("tasks",()=> {
    // Загружаем задачи из localStorage или используем дефолтные
    const tasks = ref(
        JSON.parse(localStorage.getItem("tasks") || "[]")
    );
    watch(
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
  );
   function addTask  (task)  {
        
        tasks.value.push(task)
    }
    function updateTaskStatus(id, status) {
      const task = tasks.find(t => t.id === id)
      if (task) {
        task.status = status
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    }
  return { tasks, addTask , updateTaskStatus }
});
