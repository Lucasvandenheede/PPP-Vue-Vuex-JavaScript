<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 :id="myH2">Hello</h2>
    <div v-bind:id="myId">Hello my div: {{ myId }}</div>
    <img v-bind:src="mySrc" />
  </div>
  <div>
    <h1 id="header">Event handling</h1>
    <button @click="handleClick">Click</button>
    <button @click="handleClick2(100)">Click</button>
  </div>
  <div>
    <h1>Event modifier</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" /><br />
      <button type="submit">Submit</button>
    </form>
    <button @click.once="onBtnClick">Inc</button>
    <p>{{ number }}</p>
  </div>
  <div>
    <h1>JavaScript inside a Template</h1>
    <h2>2+5 = {{ 2 + 5 }}</h2>
    <h2>{{ new Date().toLocaleTimeString() }}</h2>
    <h2>Hi my name is {{ 'Lucas'.toUpperCase() }}</h2>
    <h2>{{ sayHello() }}</h2>
  </div>
  <div>
    <h1>Two way Data Binding</h1>
    <input v-model="text" type="text" /><br />
    {{ text }}
  </div>
  <div>
    <h1>V-html</h1>
    <div v-html="myContent"></div>
  </div>
  <div>
    <h1>V-text</h1>
    <p v-text="myText"></p>
  </div>
  <div>
    <h1>V-once</h1>
    <p v-once>{{ myName }}</p>
    <p>{{ myName }}</p>
    <button @click="myName = 'new Name'">Click</button>
  </div>
  <div>
    <h1>V-Show</h1>
    <p v-show="isShowing">I am here</p>
    <button @click="isShowing = !isShowing">
      {{ isShowing ? 'HIDE' : 'SHOW' }}
    </button>
  </div>
  <div>
    <h1>V-If & V-Else & V-Else-If</h1>
    <p v-if="location === 'A'">A</p>
    <p v-else-if="location === 'b'">B</p>
    <p v-else>Home</p>
  </div>
  <div>
    <h1>V-For</h1>
    <p v-for="(letter, index) in alphabet" :key="letter">
      {{ index }}: {{ letter }}
    </p>
  </div>
  <div>
    <h1>V-Model</h1>
    <input type="text" v-model="text" /><br />
    {{ text }}
  </div>
  <div>
    <h1>V-On</h1>
    <button v-on:click="onClick">Click</button><br />
    <button @click="onClick">Click</button>
  </div>
  <div>
    <h1>V-Pre</h1>
    <span v-pre>{{ myName }}</span
    ><br />
    <span v-pre>{{ 10 + 10 }}</span>
  </div>
  <div>
    <h1>Data Object</h1>
    <p>{{ name }}</p>
    <p>{{ person.name }}</p>
    <button @click="test">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    handleClick(event) {
      console.log(event);
      event.target.style.backgroundColor = 'red';

      const header = document.getElementById('header');
      header.style.color = 'red';
    },
    handleClick2(param) {
      console.log('PARAM', param);
    },
    handleSubmit() {
      console.log('Form submit');
    },
    onBtnClick() {
      this.number = this.number + 1;
    },
    sayHello() {
      return 'HELLOOOOO';
    },
    onClick() {
      console.log('Hello');
    },
    test() {
      console.log(this.name);
    },
  },
  data() {
    return {
      myId: 'divId',
      myH2: 'myH2',
      mySrc:
        'https://images.pexels.com/photos/29320668/pexels-photo-29320668/free-photo-of-high-speed-race-car-on-a-wet-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      number: 1,
      text: 'Test',
      myContent: '<b style="color: red">Hello my content</b>',
      myText: 'Hello. How are you',
      myName: 'Lucas',
      isShowing: true,
      location: '',
      alphabet: ['A', 'B', 'C'],
      name: 'Lucas',
      person: {
        name: 'Lucas',
      },
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#divId {
  background-color: red;
}

#myH2 {
  background-color: red;
}
</style>
