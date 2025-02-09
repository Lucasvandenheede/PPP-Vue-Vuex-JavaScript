<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ index + 1 }}.</span>
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
        <div>
          <button @click="toggleDone(todo.id)" class="doneBtn">Done</button>
          <button @click="deleteTodo(todo.id)" class="deleteBtn">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const todos = computed(() => store.state.todos);

const toggleDone = id => {
  store.dispatch('toggleDone', id);
};

const deleteTodo = id => {
  store.dispatch('deleteTodo', id);
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
}

li {
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 1px 3px 3px 1px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.doneBtn {
  margin: 3px;
  cursor: pointer;
  background-color: white;
  color: green;
  border: 1px solid green;
  border: 5px;
  padding: 5px;
  border-radius: 5px;
}

.doneBtn:hover {
  background-color: green;
  color: white;
}

.deleteBtn {
  margin: 3px;
  cursor: pointer;
  background-color: white;
  color: red;
  border: 1px solid green;
  border: 5px;
  padding: 5px;
  border-radius: 5px;
}

.deleteBtn:hover {
  background-color: red;
  color: white;
}
</style>
