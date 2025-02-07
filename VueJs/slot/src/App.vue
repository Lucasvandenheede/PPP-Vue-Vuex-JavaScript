<template>
  <div>
    <Card>
      <template #cardImg>
        <img
          src="https://images.pexels.com/photos/30092951/pexels-photo-30092951/free-photo-of-classic-mclaren-racing-car-on-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </template>
      <h1>I am body</h1>
      <template #cardFooter>Hello I am footer</template>
    </Card>
    <Hello>
      <template v-slot:helloHeader>I am Header</template>
      <template #helloFooter>I am Footer</template>
      <h1>Hello</h1>
      <p>How are you</p>
      <button>Click</button>
      <Test />
    </Hello>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Hello from './components/Hello.vue';
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: { Hello, Test, Card },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100%;
}
</style>
