<template>
  <div v-for="item in todos" :key="item.id">{{ item.todo }}</div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const todos = computed(() => {
  return store.state.todos;
});
</script>
<style scoped></style>
