<script setup>
  import { ref } from 'vue';

  const inputAliases = ref(false);
</script>

<template>
  <main>
    <section class="container">
      <div class="input-btn">
        <input type="text" placeholder="long url that want to be shorted">
        <a href="" class="btn btn-primary">Shorten!</a>
      </div>
      <div class="custom-alias">
        <div class="checkbox">
          <input type="checkbox" id="ca" v-model="inputAliases">
          <label for="ca">Custom Alias</label>
        </div>
        <div v-if="inputAliases">
          <input type="text" placeholder="urlbae.com/aliases">
        </div>
      </div>
      <div class="message">
        <h4 style="margin-bottom: 0;">Link shortened!</h4>
        <p><strong>urlbae.com</strong> copy</p>
      </div>
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
