<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Title :title="page"></Title>
  <button @click="page = 'Hello. I am new page'">Click</button>
  <Title
    @onCustomTitle="onTitleClick($event)"
    title="A"
    secondTitle="B"
    customTitle="John"
  ></Title>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <HelloComponent />
  <BooleanBox :isActive="true" />
  <Number :totalNumber="5" />
  <Obj :dog="dog2" />
  <Obj :dog="{ name: 'Nio', gender: 'Male' }" />
  <Obj v-for="dog in dogArray" :dog="dog" :key="dog.name" />
  <Array :myArray="myArray" />
  <Function :onBtnClick="showConsole" />
</template>

<script>
import Array from './components/Array.vue';
import BooleanBox from './components/BooleanBox.vue';
import Function from './components/Function.vue';
import HelloComponent from './components/HelloComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import Number from './components/Number.vue';
import Obj from './components/Obj.vue';
import Title from './components/Title.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  name: 'App',
  methods: {
    showConsole() {
      console.log('Hello');
    },
    onTitleClick(event) {
      console.log('SubTitle', event);
    },
  },
  provide() {
    return {
      text: this.text,
    };
  },
  data() {
    return {
      page: 'Hello I am page',
      dog2: {
        name: 'Nio',
        gender: 'Male',
      },
      dogArray: [
        {
          name: 'Nio',
          gender: 'Male',
        },
        {
          name: 'Test',
          gender: 'Male',
        },
        {
          name: 'test',
          gender: 'Female',
        },
      ],
      myArray: [1, 2, 3, 4, 5],
      text: 'Hellooo',
    };
  },
  components: {
    HelloWorld,
    HelloComponent,
    UserInfo,
    Title,
    BooleanBox,
    Number,
    Obj,
    Array,
    Function,
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
