<template>
  <button @click="$router.push('/users')">Click and go to users page</button>
  <button @click="goToUsers">Click and go to users page</button>
  <button @click="goToUserDetail">Click and go to user detail page</button>
  <div v-if="$route.meta.isPublic">
    <router-view></router-view>
  </div>
  <div v-else class="grid-container">
    <div class="item1">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/users">Users</router-link> |
        <!-- <router-link to="/users/5">User Detail</router-link> -->
        <router-link
          :to="{
            name: 'userDetail',
            params: { userId: '100' },
            query: { name: 'Lucas', surname: 'Vanden Heede' },
          }"
          >User Detail</router-link
        >
        |
        <router-link to="/products">Products</router-link> |
        <router-link to="/information">Information</router-link>
      </nav>
    </div>
    <div class="item2">
      <h1>Menu</h1>
      <router-view name="CustomMenuView" />
    </div>
    <div class="item3"><router-view /></div>
    <div class="item5">
      <h1>Footer</h1>
      <router-view name="CustomFooterView" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToUsers() {
      this.$router.push('/users');
    },
    goToUserDetail() {
      // this.$router.push('/users/50');
      this.$router.push({
        name: 'userDetail',
        params: { userId: 222 },
        query: { name: 'Lucas', surname: 'Vanden Heede' },
      });
    },
  },
};
</script>

<style>
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main main'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
