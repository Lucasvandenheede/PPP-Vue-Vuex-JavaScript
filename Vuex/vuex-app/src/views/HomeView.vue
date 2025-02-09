<template>
  <div class="home">
    <List />
    <AddTodo />
    <TodoCount />
  </div>
</template>

<script setup>
import List from '@/components/List.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodoCount from '@/components/TodoCount.vue';
</script>

<style scoped></style>
