import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, title: 'Test', done: false },
      { id: 2, title: 'Tests', done: true },
    ],
  },
  getters: {
    getDoneTrue: state => {
      return state.todos.filter(todo => todo.done == true).length;
    },
    getDoneFalse: state => {
      return state.todos.filter(todo => todo.done == false).length;
    },
  },
  mutations: {
    setTodo: (state, todo) => {
      state.todos.push(todo);
    },
    setToggleDone: (state, id) => {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    setDeleteTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit('setTodo', todo);
    },
    toggleDone: ({ commit }, id) => {
      commit('setToggleDone', id);
    },
    deleteTodo: ({ commit }, id) => {
      commit('setDeleteTodo', id);
    },
  },
  modules: {},
});
