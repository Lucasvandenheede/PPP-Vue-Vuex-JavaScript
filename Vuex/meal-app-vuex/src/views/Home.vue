<template>
  <div class="wrapper">
    <h1>Random Meals</h1>
    <div class="cardWrapper">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import MealItem from '@/components/MealItem.vue';
import { onMounted, ref } from 'vue';

const meals = ref([]);
onMounted(async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => meals.value.push(data.meals[0]));
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}

h1 {
  color: orange;
}

.cardWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
