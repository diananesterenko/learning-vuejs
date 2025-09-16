import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTaskStore = defineStore("tasks",()=> {

    const tasks = ref(
       [{ id: 1, title: "Task 1"},
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
        { id: 4, title: "Task 4" },
        { id: 5, title: "Task 5" },
        { id: 6, title: "Task 6" },
        { id: 7, title: "Task 7" },
        { id: 8, title: "Task 8" },
        { id: 9, title: "Task 9" }]
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
