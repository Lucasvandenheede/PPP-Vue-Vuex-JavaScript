<template>
  <div class="wrapper">
    <h1 class="header">Todo List</h1>
    <div ref="complatedRef" class="complatedDiv">
      <p style="color: white">
        Total Task--{{ data.length }} // Complated Task--{{ getComplated }}
      </p>
    </div>
    <div class="inputDiv">
      <input
        ref="myInput"
        type="text"
        class="todoInput"
        v-model="model"
        placeholder="Enter anew todo"
      />
      <button @click="addTodo" class="addTodoBtn">Add Todo</button>
    </div>
    <ul class="ul">
      <li v-for="(item, index) in data" :key="index">
        <span :class="{ strike: item.complated }"> {{ item.text }} </span>
        <div class="btnGroup">
          <button @click="doneTodo(item)" class="doneBtn">Done</button>
          <button @click="deleteTodo(index)" class="deleteBtn">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Todo",
  data() {
    return {
      model: "",
      data: [],
    };
  },
  watch: {
    getComplated(newVal) {
      if (newVal / this.data.length >= 0.5) {
        this.$refs.complatedRef.style.background = "green";
      } else {
        this.$refs.complatedRef.style.background = "red";
      }
    },
  },
  computed: {
    getComplated() {
      return this.data.filter((item) => item.complated).length;
    },
  },
  methods: {
    addTodo() {
      if (this.model !== "") {
        this.data.push({
          id: Date.now(),
          text: this.model,
          complated: false,
        });
      }
      this.model = "";
      this.$refs.myInput.focus();
    },
    deleteTodo(index) {
      this.data.splice(index, 1);
    },
    doneTodo(item) {
      const idx = this.data.findIndex((x) => x.id === item.id);
      this.data[idx].complated = !item.complated;
    },
  },
};
</script>
<style scoped>
.strike {
  text-decoration: line-through;
  color: green;
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  color: white;
}
.inputDiv {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.todoInput {
  width: 70%;
  padding: 5px;
  border: none;
  border-radius: 10px;
}
.addTodoBtn {
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
}
.addTodoBtn:hover {
  background-color: navy;
  color: white;
}
.ul {
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}
.ul li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding-left: 1rem;
  background-color: white;
}
.btnGroup {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.deleteBtn {
  background-color: white;
  color: red;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.deleteBtn:hover {
  background-color: red;
  color: white;
}
.doneBtn {
  background-color: white;
  color: green;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.doneBtn:hover {
  background-color: green;
  color: white;
}
.complatedDiv {
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 10px;
}
</style>
