<template>
  <div>
    <button @click="onBtnClick">Click</button>
  </div>
</template>
<script>
export default {
  name: 'Function',
  props: {
    onBtnClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped></style>
