<template>
  <div>
    <AppHeaders />
    <Container />
  </div>
</template>
<script setup>
import AppHeaders from "./components/AppHeaders.vue";
import Container from "./components/Container.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Inter&display=swap");
body {
  margin: 0;
  padding: 0;
  font-family: "Dancing Script", cursive;
  box-sizing: border-box;
}
</style>
