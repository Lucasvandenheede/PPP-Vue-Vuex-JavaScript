<template>
  <div>
    <li>
      <ListItemTitle :userTitle="userItem.title" />
      <ListItemBody :userBody="userItem.body" />
      <DeleteButton @onDelete="$emit('onDelete')" />
    </li>
  </div>
</template>

<script>
import ListItemTitle from './ListItemTitle.vue';
import ListItemBody from './ListItemBody.vue';
import DeleteButton from './DeleteButton.vue';

export default {
  name: 'ListItem',
  props: ['userItem'],
  components: { ListItemTitle, ListItemBody, DeleteButton },
};
</script>

<style scoped>
li {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 10px;
  background-color: #2c3b50;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  margin: 1rem;
}

li:hover {
  transform: scale(1.05);
}
</style>
