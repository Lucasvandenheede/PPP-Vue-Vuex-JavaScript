<template>
  <div class="wrapper">
    <header class="header">
      <router-link to="/">Home</router-link>
      <div class="search">
        <router-link :to="{ name: 'byName' }">Search Meals</router-link>
        <router-link :to="{ name: 'byLetter' }">Meals By Letter</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
  background-color: beige;
}

.search {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
