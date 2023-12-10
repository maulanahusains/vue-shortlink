<script setup>
</script>

<template>
  <main>
    <section id="home" class="container">
      <h3>Your 5 last shortened link</h3>
      <router-link class="btn btn-primary" to="/short">Short new link</router-link>
      
      <ol>
        <li>
          Judul
          <button class="btn btn-info">details</button>
        </li>
      </ol>
    </section>
  </main>
</template>

<style scoped>
  .btn:hover {
    opacity: 1;
  }
  .btn {
    padding: 4px 8px;
    border-radius: 5px;
  }

  .btn-info {
    border: 0;
    color: white;
    text-decoration: none;
    opacity: 0.7;
    background-color: rgb(153, 0, 255);
  }
  .btn-primary {
    color: white;
    text-decoration: none;
    opacity: 0.7;
    background-color: rgb(153, 0, 255);
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
</style>