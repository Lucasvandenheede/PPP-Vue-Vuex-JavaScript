<template>
  <div>
    <WelcomeScreen v-if="showWelcomeScreen" />
    <ListWrapper v-else />
  </div>
</template>

<script>
import ListWrapper from "./components/ListWrapper.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";

export default {
  name: "App",
  components: { WelcomeScreen, ListWrapper },
  data() {
    return {
      showWelcomeScreen: true,
    };
  },
  created() {
    setTimeout(() => {
      document.body.style.padding = "20px";
      document.body.style.overflow = "auto";
      this.showWelcomeScreen = false;
    }, 10000);
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: navy;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: maroon;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0b3d91;
  color: white;
  overflow: hidden;
}
</style>
