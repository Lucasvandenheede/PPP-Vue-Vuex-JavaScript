<template>
  <div>
    <h1 @click="count++">Component A</h1>
    <h2>{{ count }}</h2>
  </div>
</template>
<script>
export default {
  name: 'ComponentA',
  deactivated() {
    console.log('I went out');
  },
  activated() {
    console.log('I got in');
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped></style>
