<template>
  <div class="createPostWrapper">
    <div class="inputDiv">
      <label for="title">Title</label>
      <input v-model="title" type="text" name="title" id="tile" />
    </div>
    <div class="inputDiv">
      <label for="body">Body</label>
      <input v-model="body" type="text" name="body" id="body" />
    </div>
    <button @click="onSavePost">Submit</button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    onSavePost() {
      // fetch('https://jsonplaceholder.typicode.com/posts', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     title: this.title,
      //     body: this.body,
      //     userId: 1,
      //   }),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      // })
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json);
      //     this.$emit('onPostCreated', json);
      //     this.title = '';
      //     this.body = '';
      //   });
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: this.title,
          body: this.body,
          userId: 1,
        })
        .then(response => {
          this.$emit('onPostCreated', response.data);
          this.title = '';
          this.body = '';
        });
    },
  },
};
</script>
<style>
.createPostWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

button {
  border: none;
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
