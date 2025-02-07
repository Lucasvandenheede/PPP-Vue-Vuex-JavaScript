<template>
  <div>
    <h1 v-for="item in myArray" :key="item">{{ item }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Array',
  props: {
    myArray: {
      type: Array,
    },
  },
};
</script>
<style scoped></style>
