<template>
  <div>
    <Navbar />
  </div>
  <div>
    <AddTodo />
    <div>
      <Count />
    </div>
    <div>
      <ListTodo />
    </div>
  </div>
</template>

<script setup>
import AddTodo from '@/components/AddTodo.vue';
import Count from '@/components/Count.vue';
import ListTodo from '@/components/ListTodo.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped></style>
