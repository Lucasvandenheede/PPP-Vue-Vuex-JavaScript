<template>
  <div>
    <h1>Next Tick</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'NextTick',
  data() {
    return {
      message: 'Test',
    };
  },
  mounted() {
    this.message = 'Test2';
    this.$nextTick(() => {
      if (this.message === 3) {
        console.log(this.message);
        this.message = 'Hello';
      }
    });
    this.message = 4;
  },
};
</script>

<style scoped></style>
