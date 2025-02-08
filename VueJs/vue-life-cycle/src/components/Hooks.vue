<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Hooks',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  beforeUpdate() {
    console.log(
      `Counter value is about to change from ${this.counter} to ${
        this.counter + 1
      }`
    );
  },
  updated() {
    console.log(
      `Counter value has changed from ${this.counter - 1} to ${this.counter}`
    );
  },
  beforeUnmount() {
    console.log('Before Unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
};
</script>

<style></style>
