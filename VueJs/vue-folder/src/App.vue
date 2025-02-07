<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Title :title="page" />
  <button @click="page = 'Hello. I am new page'">Click</button>
  <Title title="Header" secondTitle="Footer" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <HelloComponent />
</template>

<script>
import HelloComponent from './components/HelloComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import Title from './components/Title.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  name: 'App',
  data() {
    return { page: 'Hello I am page' };
  },
  components: {
    HelloWorld,
    HelloComponent,
    UserInfo,
    Title,
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
</style>
