<template>
  <div>
    <h1>User Detail Page: {{ $route.params.userId }}: {{ $route.query }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
};
</script>

<style scoped></style>
