<template>
  <div>
    <h1>New Component</h1>
    <div class="wrapper">
      <img
        src="https://images.pexels.com/photos/29734293/pexels-photo-29734293/free-photo-of-dynamic-supercar-driving-on-mountain-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <UserInfo :name="user.name" :surname="user.surname" :age="user.age" />
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  name: 'HelloComponent',
  data() {
    return {
      user: {
        name: 'Lucas',
        surname: 'Vanden Heede',
        age: 21,
      },
    };
  },
  components: { UserInfo },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: bisque;
  margin: auto;
}
img {
  width: 100%;
}
</style>
