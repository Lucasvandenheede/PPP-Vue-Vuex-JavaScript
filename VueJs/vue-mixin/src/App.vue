<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="changeName">Change</button>
    <Mixin />
  </div>
</template>

<script>
import Mixin from './components/Mixin.vue';
import myMixin from './mixins/myMixin';

export default {
  name: 'App',
  components: {
    Mixin,
  },
  mixins: [myMixin],
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
