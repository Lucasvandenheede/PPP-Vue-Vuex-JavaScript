<template>
  <div class="wrapper">
    <h1>Meals By Letter</h1>
    <div class="letters">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        >{{ letter }}</router-link
      >
    </div>
    <div class="cardWrapper">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import MealItem from '@/components/MealItem.vue';

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>

<style scoped>
.wrapper {
  margin-top: 32px;
}

h1 {
  color: orange;
}

.letters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
}

.cardWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
