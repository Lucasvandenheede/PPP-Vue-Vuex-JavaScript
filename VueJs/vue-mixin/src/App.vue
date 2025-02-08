<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="changeName">Change</button>
    <Mixin />
  </div>
  <div>
    <NextTick />
  </div>
</template>

<script>
import Mixin from './components/Mixin.vue';
import NextTick from './components/NextTick.vue';
import myMixin from './mixins/myMixin';

export default {
  name: 'App',
  components: {
    Mixin,
    NextTick,
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
