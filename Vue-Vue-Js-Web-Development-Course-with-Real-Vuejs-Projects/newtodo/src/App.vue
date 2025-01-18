<template>
  <Todo />
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: { Todo },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Inter&family=Rajdhani:wght@500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}
body {
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #2c3e50;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
