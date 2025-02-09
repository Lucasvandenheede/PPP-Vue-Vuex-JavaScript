<template>
  <div class="wrapper">
    <p>Logo</p>
    <button @click="router.push('/')">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid grey;
  height: 32px;
  background-color: rgb(196, 192, 192);
}

p {
  margin-left: 32px;
}

button {
  margin-right: 32px;
  background-color: black;
  color: white;
  padding: 3px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
