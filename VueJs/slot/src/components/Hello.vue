<template>
  <div class="sayHello">
    <div class="header">
      <slot name="helloHeader">Header</slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="helloFooter">Footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
};
</script>

<style scoped>
.sayHello {
  padding: 20px;
  border: 1px solid red;
}

.header {
  background-color: brown;
  color: aliceblue;
}

.body {
  background-color: blueviolet;
}

.footer {
  background-color: blue;
  color: aliceblue;
}
</style>
