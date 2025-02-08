const myMixin = {
  data() {
    return {
      name: 'Lucas',
    };
  },
  methods: {
    changeName() {
      this.name = 'John';
    },
  },
};
export default myMixin;
