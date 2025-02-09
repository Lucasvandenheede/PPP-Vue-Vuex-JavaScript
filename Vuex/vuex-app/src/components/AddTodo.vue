<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo" />
      <button>Add</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const todo = ref('');
const addTodo = () => {
  const objTodo = {
    newtodo: todo.value,
    done: true,
  };
  store.dispatch('addTodoAction', objTodo);
  todo.value = '';
};
</script>
<style scoped></style>
