<template>
  <div>
    <div v-if="todos.length === 0">Todo not Entered!</div>
    <div v-else>
      <p><strong>Complated Todo:</strong> {{ trueCount }}</p>
      <p><strong>Pending Todo:</strong>{{ falseCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const todos = computed(() => store.state.todos);

const trueCount = computed(() => store.getters.getDoneTrue);
const falseCount = computed(() => store.getters.getDoneFalse);
</script>

<style scoped></style>
