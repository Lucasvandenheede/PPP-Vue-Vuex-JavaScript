<template>
  <div class="wrapper">
    <button @click="showModal = true">Open</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modalContent">
          <h2>Modal Header</h2>
          <p>Modal content</p>
          <button @click="showModal = false">Modal close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showModal: false,
    };
  },
  components: {},
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContent {
  background-color: #fff;
  padding: 20px;
}
</style>
