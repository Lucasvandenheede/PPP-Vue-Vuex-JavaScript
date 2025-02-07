<template>
  <div>
    <h1>{{ totalNumber * 2 }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Number',
  props: {
    totalNumber: {
      type: Number,
      default: 100,
    },
  },
};
</script>
<style scoped></style>
