import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .mixin({
    created() {
      console.log('Hello I am a mixin');
    },
  })
  .mount('#app');
