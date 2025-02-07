<template>
  <div class="sideWrapper">
    <h3>Side</h3>
    <Card height="100px" content="test" />
    <Card height="100px" content="test" />
    <Card height="100px" content="test" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Side',
  components: { Card },
};
</script>

<style scoped>
.sideWrapper {
  height: calc(100vh - 77px);
  display: flex;
  flex: 1;
  background-color: lightgrey;
  gap: 20px;
}
</style>
