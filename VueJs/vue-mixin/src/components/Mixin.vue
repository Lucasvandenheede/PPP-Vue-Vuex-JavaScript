<template>
  <div>
    <h1>{{ name }} {{ surname }}</h1>
    <button @click="changeName">Change</button>
  </div>
</template>

<script>
import myMixin from '@/mixins/myMixin';
import myOtherMixin from '@/mixins/myOtherMixin';

export default {
  name: 'Mixin',
  mixins: [myMixin, myOtherMixin],
};
</script>

<style></style>
