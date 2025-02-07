<template>
  <div>
    <div :class="`myBox ${isActive ? 'green' : 'red'}`">BooleanBox</div>
  </div>
</template>

<script>
export default {
  name: 'BooleanBox',
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
};
</script>

<style scoped>
.myBox {
  width: 200px;
  height: 200px;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>
