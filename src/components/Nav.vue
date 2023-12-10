<script setup>
  import { useRoute } from 'vue-router';

  const currentPath = useRoute();
</script>

<template>
  <header>
    <nav class="container nav">
      <router-link to="/" style="text-decoration: none; color: white;">
        <h1 class="brand-title">Bitly</h1>
      </router-link>
      <div class="menu">
        <router-link class="menu-item" :class="{active: currentPath.path == '/short'}" to="/short">Short a link</router-link>
        <router-link class="menu-item" :class="{active: currentPath.path == '/lists'}" to="/lists">See all</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .menu .menu-item:hover {
    color: aqua;
    text-decoration: underline;
  }
  .menu .menu-item {
    text-decoration: none;
    color: white;
  }

  .menu .active {
    color: aqua;
  }
</style>