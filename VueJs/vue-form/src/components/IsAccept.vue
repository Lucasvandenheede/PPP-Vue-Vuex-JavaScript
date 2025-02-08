<template>
  <div @click="$emit('update:modelValue', !this.modelValue)">
    {{ modelValue ? 'Yes' : 'No' }}
  </div>
</template>

<script>
export default {
  name: 'IsAccept',
  props: ['modelValue'],
};
</script>

<style scoped></style>
