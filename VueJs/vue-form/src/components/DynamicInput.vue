<template>
  <div style="display: flex; flex-direction: column">
    <div v-for="item in userExp" :key="item.company" style="display: flex">
      <div>
        <label for="name">Company</label>
        <input
          v-model="item.company"
          type="text"
          id="name"
          placeholder="Company"
        />
      </div>
      <div>
        <label for="year">Experience</label>
        <input v-model="item.exp" type="text" id="year" placeholder="...year" />
      </div>
    </div>
    <button @click="addNewExp()">Add exp +</button>
  </div>
</template>
<script>
export default {
  name: 'DynamicInput',
  data() {
    return {
      userExp: [
        {
          company: '',
          exp: '',
        },
      ],
    };
  },
  methods: {
    addNewExp() {
      this.userExp.push({
        company: '',
        exp: '',
      });
    },
  },
};
</script>
<style scoped></style>
