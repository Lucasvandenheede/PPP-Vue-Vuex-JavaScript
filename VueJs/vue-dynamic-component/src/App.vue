<template>
  <div class="wrapper">
    <button @click="activeComponent = 'ComponentA'">Component A</button>
    <button @click="activeComponent = 'ComponentB'">Component B</button>
    <button @click="activeComponent = 'ComponentC'">Component C</button>
  </div>
  <h1>Active component: {{ activeComponent }}</h1>
  <keep-alive>
    <component :is="activeComponent"></component>
  </keep-alive>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';

export default {
  name: 'App',
  data() {
    return {
      activeComponent: 'ComponentA',
    };
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
}

button {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #2c3e50;
  color: #fff;
  padding: 8px;
  cursor: pointer;
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
