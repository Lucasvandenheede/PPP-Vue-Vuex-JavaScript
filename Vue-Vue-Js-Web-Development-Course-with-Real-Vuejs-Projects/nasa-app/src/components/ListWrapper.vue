<template>
  <div class="inputWrapper">
    <input type="text" autofocus v-model="query" />
  </div>
  <div class="listWrapper">
    <div v-for="item in data">
      <ListItem :item="item" />
    </div>
  </div>
  <div v-if="data.length === 0 && loading === false" class="noData">
    Sorry, data could not be found
  </div>
  <div v-if="loading === true" class="noData">
    <Loading />
  </div>
</template>
<script>
import Loading from "./Loading.vue";
import ListItem from "./ListItem.vue";
export default {
  name: "ListWrapper",
  components: { Loading, ListItem },
  methods: {
    fetchData(query) {
      this.loading = true;
      fetch("https://images-api.nasa.gov/search?q=" + query)
        .then((res) => res.json())
        .then((data) => {
          this.loading = false;
          console.log(data);
          this.data = data.collection.items;
        });
    },
  },
  data() {
    return {
      query: "",
      data: [],
      loading: false,
    };
  },
  watch: {
    query(newVal, oldVal) {
      if (newVal.length > 2) {
        this.fetchData(newVal);
      } else {
        this.data = [];
      }
    },
  },
};
</script>
<style scoped>
.inputWrapper {
  width: 100%;
  display: flex;
  margin-bottom: 32px;
}
.inputWrapper input {
  width: 100%;
  display: flex;
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 10px;
}
.listWrapper {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.noData {
  text-align: center;
  width: 100%;
  color: white;
  font-size: 32px;
}
</style>
