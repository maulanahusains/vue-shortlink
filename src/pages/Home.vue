<script setup>
  import { inject, onBeforeMount, ref } from 'vue';

  const axios = inject('axios');
  const data = ref({});

  async function getList() {
    await axios.get('/api/urls')
    .then(response => {
      console.log(response.data)
      data.value = response.data;
    })
    .catch(err => {
      console.log(err)
    });
  }

  onBeforeMount(async () => {
    await getList();
  });
</script>

<template>
  <main>
    <section id="home" class="container">
      <h3>Your 5 last shortened link</h3>
      <router-link class="btn btn-primary" to="/short">Short new link</router-link>
      
      <table class="table">
        <tbody>
          <tr v-for="item, index in data.data.urls">
            <td>{{ index + 1 }}.</td>
            <td>{{ item.title }}</td>
            <td>
              <button class="btn btn-info">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
  .table {
    margin-top: 1rem;
  }

  tr {
    display: flex;
    gap: 0.5rem;
  }
</style>