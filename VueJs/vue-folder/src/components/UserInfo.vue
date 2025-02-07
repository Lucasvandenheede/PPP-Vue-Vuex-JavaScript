<template>
  <div>
    <h1>{{ userName }}</h1>
    <h1>{{ surname }}</h1>
    <h1>{{ age }}</h1>
    <button @click="onBtnClick">Click</button>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    onBtnClick() {
      console.log(this.name);
      this.userName = 'Marlon';
    },
  },
  data() {
    return {
      userName: this.name,
      // surname: 'SURNAME',
    };
  },
  props: {
    name: String,
    surname: String,
    age: [String, Number],
  },
};
</script>

<style scoped></style>
