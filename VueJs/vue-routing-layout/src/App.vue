<template>
  <!-- <MainLayout v-if="$route.meta.layout === 'Main'">
    <router-view />
  </MainLayout>
  <AboutLayout v-if="$route.meta.layout === 'About'">
    <router-view />
  </AboutLayout> -->

  <component :is="$route.meta.componentLayout">
    <router-view />
  </component>
</template>
<script>
import AboutLayout from './layouts/AboutLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

export default {
  name: 'App',
  components: { MainLayout, AboutLayout },
};
</script>
<style></style>
