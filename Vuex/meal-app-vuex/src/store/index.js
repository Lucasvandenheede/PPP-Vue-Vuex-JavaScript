import { createStore } from 'vuex';

export default createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
  },
  getters: {},
  mutations: {
    setSearchMeals(state, meals) {
      state.searchedMeals = meals;
    },
    setMealsByLetter(state, meals) {
      state.mealsByLetter = meals;
    },
  },
  actions: {
    searchMeals(context, keyword) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(res => res.json())
        .then(data => context.commit('setSearchMeals', data.meals));
    },
    searchMealsByLetter(context, letter) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => context.commit('setMealsByLetter', data.meals));
    },
  },
  modules: {},
});
