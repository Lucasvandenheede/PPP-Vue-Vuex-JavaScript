<template>
  <div>
    <button @click="$emit('onDelete')">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'DeleteButton',
};
</script>

<style scoped>
button {
  border: none;
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
