import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, todo: 'A', done: true },
      { id: 2, todo: 'B', done: false },
      { id: 3, todo: 'C', done: true },
      { id: 4, todo: 'D', done: false },
    ],
  },
  getters: {
    todoTotalCount(state) {
      return state.todos.length;
    },
    todoDoneCount(state) {
      return state.todos.filter(x => x.done === true).length;
    },
    todoNotDoneCount(state) {
      return state.todos.filter(x => x.done === false).length;
    },
  },
  mutations: {
    addTodo(state, { newtodo, done }) {
      let todo = {
        id: Math.floor(Math.random() * 100),
        todo: newtodo,
        done: done,
      };
      state.todos.push(todo);
    },
  },
  actions: {
    addTodoAction(context, todoObject) {
      context.commit('addTodo', todoObject);
    },
  },
  modules: {},
});
