<template>
  <div>
    <!-- {{ count }} -->
    <button @click="changeCountComposition">+</button><br />
    {{ user.name }}
    <button @click="changeName(Math.random())">Change Name</button><br />
    {{ count2.point }}
    <button @click="changeCount2">?</button><br />
    <button @click="check">Check</button><br />
    <HelloWorld @on-number-click="testFunction($event)" />
    <input type="text" ref="myInput" v-Focus />
    <button @click="refInput">Ref</button><br />
    <h1>Computed: {{ dataList.myList.length }}</h1>
    <h1>Computed: {{ computedListLength }}</h1>
    <p>------------</p>
    <h1>{{ wsize }}</h1>
    <div>
      <p>Counter: {{ count }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  isRef,
  isReactive,
  toRef,
  computed,
  watchEffect,
  onMounted,
  onUnmounted,
  onBeforeMount,
} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import useWindowSize from './useWindowSize';
import useCounter from './useCounter';

// const count = ref(0);
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// });
// watch([count, count2], (newValue, oldValue) => {}, { immediate: true });
// watchEffect(() => {
//   console.log(count.value);
// });

const user = reactive({
  name: 'Lucas',
});
let count2 = reactive({
  point: 10,
  name: 'John',
});
const myInput = ref(null);

const dataList = reactive({
  myList: [1, 2, 3],
});
const computedListLength = computed(() => {
  return dataList.myList.length > 1 ? 'Greater than 1' : 'Less than 1';
});
const vFocus = {
  mounted: el => el.focus(),
};
const { wsize } = useWindowSize();
const { count, increment, decrement } = useCounter();

const changeCountComposition = () => {
  count.value++;
};
const changeName = d => {
  user.name = d;
};
const changeCount2 = () => {
  console.log(count2.point);
  count2.point++;
};
const check = () => {
  console.log(isRef(count));
  console.log(isRef(user));
  console.log('-----');
  console.log(isReactive(count));
  console.log(isReactive(user));
  const nameRef = toRef(count2, 'point');
  console.log(nameRef.value);
};
const testFunction = e => {
  alert(e);
};
const refInput = () => {
  console.log(myInput.value);
};

onMounted(() => {
  alert('onMounted');
});

onUnmounted(() => {
  alert('onUnmounted');
});

onBeforeMount(() => {});
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
