<template>
  <div>
    <div class="header">
      <h1>{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" />
    </div>
    <div class="middelWrapper">
      <div>
        <strong>Category: {{ meal.strMealCategory }}</strong>
      </div>
      <div>
        <strong>Area: {{ meal.strArea }}</strong>
      </div>
      <div>
        <strong>Tags: {{ meal.strTags }}</strong>
      </div>
    </div>
    <div class="bottomWrapper">
      <div>
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(el, index) in new Array(20)">
            <span v-if="meal[`strIngredient${index + 1}`]"
              >{{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h2>Measures</h2>
        <ul>
          <li v-for="(el, index) in new Array(10)">
            <span v-if="meal[`strMeasure${index + 1}`]"
              >{{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const meal = ref('');
const route = useRoute();

onMounted(() => {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  )
    .then(res => res.json())
    .then(data => (meal.value = data.meals[0]));
});
</script>

<style scoped>
li {
  list-style-type: none;
}
.header {
  width: 100%;
  text-align: center;
}

.header img {
  width: 400px;
}

.middelWrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.bottomWrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
</style>
