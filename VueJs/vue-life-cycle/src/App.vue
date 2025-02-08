<template>
  <div class="wrapper">
    <h1>LifeCycles Hook</h1>
    <img ref="vueImg" id="myImg" src="./assets/logo.png" alt="Vue logo" />
    <Hooks v-if="show"></Hooks>
    <br />
    <button @click="show = !show">Show/Hide</button>

    <h1>Refs</h1>
    <button @click="$refs.vueImg.style.width = '600px'">Grow</button>
    <button @click="$refs.vueImg.style.width = '300px'">Shrink</button>

    <h1>Multiple Refs</h1>
    <p ref="myElement" v-for="item in myArr" :key="item">{{ item }}</p>

    <h1>Computed</h1>
    <div>
      <p>{{ fullName }}</p>
      <p>{{ reverseFullName }}</p>
    </div>

    <div>
      <h1>{{ total }}</h1>
      <h3>{{ totalResult }}</h3>
      <button @click="total += 1">Click</button>
    </div>

    <h1>Watch</h1>
    <h1 ref="counterRef">{{ counter }}</h1>
    <button @click="counter++">Click</button>
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
      myArr: [1, 2, 3],
      firstName: 'Lucas',
      lastName: 'Vanden Heede',
      total: 0,
      counter: 0,
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
    // myImg.style.width = '500px';
    console.log('myImg', myImg);
    console.log(this.name);

    // this.$refs.vueImg.style.width = '700px';

    console.log(this.$refs.myElement);
    this.$refs.myElement[0].style.color = 'blue';
    this.$refs.myElement[2].style.backgroundColor = 'red';
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    reverseFullName() {
      return this.fullName.split('').reverse().join('');
    },
    totalResult() {
      return this.total > 10 ? 'Bigger than 10' : 'Lower than 10';
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue > 5) {
        this.$refs.counterRef.style.background = 'red';
      }
      if (oldValue > 7) {
        this.$refs.counterRef.style.background = 'blue';
      }
    },
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
