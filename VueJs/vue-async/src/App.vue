<template>
  <ComponentA v-if="activeComponent === 1" />
  <ComponentB v-if="activeComponent === 0" />
  <button @click="activeComponent = activeComponent === 1 ? 0 : 1">
    Change
  </button>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ComponentA from './components/ComponentA.vue';
import loadingComponent from './components/Loading.vue';
const ComponentB = defineAsyncComponent({
  loader: () => import('./components/ComponentB.vue'),
  loadingComponent: loadingComponent,
});

export default {
  name: 'App',
  data() {
    return {
      activeComponent: 1,
    };
  },
  components: {
    ComponentA,
    ComponentB,
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
