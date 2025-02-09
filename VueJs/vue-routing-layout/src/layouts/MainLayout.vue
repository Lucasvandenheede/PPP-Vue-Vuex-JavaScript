<template>
  <div class="mainLayout">
    <header>I am a header</header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainLayout',
};
</script>
<style scoped>
.mainLayout {
  display: flex;
  flex-direction: column;
}

header {
  background-color: blueviolet;
  height: 60px;
}

.content {
  margin: auto;
  max-width: 1200px;
}
</style>
