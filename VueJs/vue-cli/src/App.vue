<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hi. How are you" />
  <h1>{{ message }}</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'Hollaaaaaa',
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
  background-color: red;
}
</style>
