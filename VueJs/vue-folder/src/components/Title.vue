<template>
  <div>
    <h1 @click="onTitleClick">{{ title }}</h1>
    <h2>{{ secondTitle }}</h2>
    <h2>{{ customTitle }}</h2>
    <SubTitle @subTitleClick="subTitleClick" />
  </div>
</template>

<script>
import SubTitle from './SubTitle.vue';

export default {
  name: 'Title',
  methods: {
    onTitleClick() {
      this.$emit('onCustomTitle', 500);
    },
    subTitleClick() {
      console.log('2. example');
    },
  },
  props: {
    title: String,
    secondTitle: String,
    customTitle: {
      validator(value) {
        return value === 'John';
      },
    },
  },
  components: { SubTitle },
};
</script>

<style scoped></style>
