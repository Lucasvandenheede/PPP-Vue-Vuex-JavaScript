<template>
  <div class="wrapper">
    <ul>
      <ListItem
        @onDelete="$emit('onDelete', item.id)"
        v-for="item in userList"
        :key="item.id"
        :userItem="item"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'ListWrapper',
  props: ['userList'],
  components: { ListItem },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

ul {
  width: 60%;
  display: flex;
  flex-direction: column;
}
</style>
