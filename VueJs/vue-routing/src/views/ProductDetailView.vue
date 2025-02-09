<template>
  <div>
    <h4>Product Detail: {{ $route.params }}</h4>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
};
</script>

<style scoped></style>
