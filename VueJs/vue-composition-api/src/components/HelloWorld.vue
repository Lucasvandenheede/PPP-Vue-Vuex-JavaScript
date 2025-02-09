<template>
  <div class="hello">
    <h1 @click="myCustomFunction">{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const myProps = defineProps({
  msg: {
    type: Number,
    required: false,
    default: 20,
  },
});
const emit = defineEmits(['onNumberClick']);
const myCustomFunction = () => {
  emit('onNumberClick', 5);
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
