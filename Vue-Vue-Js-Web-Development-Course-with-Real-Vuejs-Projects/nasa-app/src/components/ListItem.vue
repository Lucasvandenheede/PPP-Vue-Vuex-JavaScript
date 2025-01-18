<template>
  <div class="card">
    <img :src="item.links[0].href" alt="" />
    <div class="container">
      <h4>{{ item.data[0].title }}</h4>
      <p>{{ item.data[0].description }}</p>
      <div class="tags">
        <div class="tagItem" v-for="tag in item.data[0]?.keywords?.slice(0, 3)">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListItem",
  props: ["item"],
};
</script>
<style scoped>
.card {
  border: 1px solid red;
  box-shadow: 1px 3px 3px 1px;
  width: 250px;
  border-radius: 10px;
  transition: all 0.5s;
}
.card img {
  width: 100%;
  height: 150px;
  object-fit: fill;
  border-radius: 10px;
}
.card:hover {
  transform: scale(1.05);
}
h4 {
  color: red;
  font-weight: 500;
}
.container {
  padding: 4px 8px;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 15px;
  font-weight: 400;
}
.tags {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  cursor: pointer;
}
.tagItem {
  padding: 8px;
  background-color: white;
  color: black;
  font-size: 12px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
