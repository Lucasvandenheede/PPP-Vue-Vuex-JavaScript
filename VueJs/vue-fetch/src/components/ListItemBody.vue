<template>
  <div>
    <p>
      {{ userBody }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ListItemBody',
  props: ['userBody'],
};
</script>

<style scoped></style>
