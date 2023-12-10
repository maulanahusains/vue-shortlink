
<template>
  <Nav />
  <router-view></router-view>
  <ModalWindow />
</template>

<script setup>
  import Nav from './components/Nav.vue';
  import ModalWindow from './components/Modals/ModalWindow.vue';
</script>

<style scoped>

</style>
