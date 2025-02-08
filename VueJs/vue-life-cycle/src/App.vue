<template>
  <div class="wrapper">
    <h1>LifeCycles Hook</h1>
    <img id="myImg" src="./assets/logo.png" alt="Vue logo" />
    <Hooks v-if="show"></Hooks>
    <br />
    <button @click="show = !show">Show/Hide</button>
  </div>
</template>

<script>
import Hooks from './components/Hooks.vue';

export default {
  name: 'App',
  data() {
    return {
      show: true,
      name: 'Lucas Vanden Heede',
    };
  },
  beforeCreate() {
    const myImg = document.getElementById('myImg');
    console.log('myImg', myImg);
    console.log(this.name);
  },
  created() {
    const myImg = document.getElementById('myImg');
    console.log('myImg', myImg);
    console.log(this.name);
  },
  beforeMount() {
    const myImg = document.getElementById('myImg');
    console.log('myImg', myImg);
    console.log(this.name);
  },
  mounted() {
    const myImg = document.getElementById('myImg');
    console.log('myImg', myImg);
    console.log(this.name);
  },
  components: { Hooks },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
