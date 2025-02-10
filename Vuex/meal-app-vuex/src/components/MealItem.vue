<template>
  <div class="card">
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }"
      ><img :src="meal.strMealThumb"
    /></router-link>
    <div class="cardBottom">
      <h3>{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        aspernatur?
      </p>
      <a class="youtube" :href="meal.strYoutube" target="_blank">Youtube</a>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({ meal: Object });
</script>

<style scoped>
.card {
  width: 200px;
  height: 400px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 1px 3px 3px 1px;
  transition: all 0.5s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cardBottom {
  padding: 5px;
}

.youtube {
  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
  background-color: brown;
  color: white;
}

.youtube:hover {
  background-color: red;
}
</style>
