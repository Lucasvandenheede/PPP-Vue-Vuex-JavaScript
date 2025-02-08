<template>
  <div>
    <CreatePost @onPostCreated="onPostCreated($event)" />
    <h1>Posts</h1>
    <div v-if="hasError">None endpoint</div>
    <Loading v-if="isLoading" />
    <ListWrapper @onDelete="onDeletePost($event)" v-else :userList="userList" />
  </div>
</template>

<script>
import axios from 'axios';
import CreatePost from './components/CreatePost.vue';
import ListWrapper from './components/ListWrapper.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  data() {
    return {
      userList: [],
      isLoading: true,
      hasError: false,
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    onPostCreated(data) {
      this.userList.unshift(data);
    },
    onDeletePost(id) {
      // fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      //   method: 'DELETE',
      // });
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + id);
      this.userList = this.userList.filter(item => item.id !== id);
    },
    async getdata() {
      try {
        // const result = await fetch(
        //   'https://jsonplaceholder.typicode.com/posts'
        // );
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(result);
        if (result.status == 404) {
          this.hasError = true;
        } else {
          const data = await result.data;
          this.userList = data;
        }
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { ListWrapper, Loading, CreatePost },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

body {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
