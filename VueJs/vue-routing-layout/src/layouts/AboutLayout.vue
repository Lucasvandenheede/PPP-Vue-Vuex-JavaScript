<template>
  <div class="aboutLayout">
    <div class="leftBar">Left Side</div>
    <div class="rightBar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutLayout',
};
</script>
<style scoped>
.aboutLayout {
  display: flex;
}

.leftBar {
  height: 100vh;
  background-color: red;
  flex: 1;
}

.rightBar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
}
</style>
