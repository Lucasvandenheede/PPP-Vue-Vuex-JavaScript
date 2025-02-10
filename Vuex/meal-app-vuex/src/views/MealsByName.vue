<template>
  <div class="wrapper">
    <h1>Search By Name</h1>
    <input
      class="searchInput"
      type="text"
      placeholder="Search For Meal"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div class="cardWrapper">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from '@/components/MealItem.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const keyword = ref();
const store = useStore();
const meals = computed(() => store.state.searchedMeals);
const searchMeals = () => {
  store.dispatch('searchMeals', keyword.value);
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  margin-bottom: 32px;
}

h1 {
  color: orange;
}

.searchInput {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
}

.cardWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
