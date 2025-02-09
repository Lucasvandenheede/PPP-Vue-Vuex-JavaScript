<template>
  <div>
    <p>True: {{ TodoDoneCount }}</p>
    <p>False: {{ TodoNotDoneCount }}</p>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const TodoDoneCount = computed(() => {
  return store.getters.todoDoneCount;
});
const TodoNotDoneCount = computed(() => {
  return store.getters.todoNotDoneCount;
});
</script>
<style scoped></style>
