<template>
  <div>
    <h1>Users Page</h1>
    <input type="text" v-model="text" />
    <button @click="createNewRoute">New Path</button>
  </div>
</template>

<script>
import router from '@/router';
import TestView from './TestView.vue';

export default {
  name: 'Users',
  // beforeRouteEnter(to, from) {
  //   console.log('To:', to);
  //   console.log('from:', from);
  // },
  // beforeRouteLeave(to, from) {
  //   console.log('To:', to);
  //   console.log('from:', from);
  //   return this.text.length > 1;
  // },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    createNewRoute() {
      router.addRoute({
        path: '/newPath',
        name: 'newPath',
        component: TestView,
      });
      this.$router.push('/newPath');
      console.log(router.getRoutes());
      console.log(router.hasRoute('newPath'));
      router.removeRoute('newPath');
    },
  },
};
</script>

<style scoped></style>
