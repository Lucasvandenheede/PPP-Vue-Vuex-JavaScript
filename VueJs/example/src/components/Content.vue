<template>
  <div class="contentWrapper">
    <h3>Content</h3>
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Content',
  components: { Card },
};
</script>

<style scoped>
.contentWrapper {
  height: calc(100vh - 77px);
  display: flex;
  flex: 2;
  flex-direction: column;
  background-color: grey;
}
</style>
