<script setup>
</script>

<template>
  <main>
    <section id="home" class="container">
      <h3>Your 5 last shortened link</h3>
      <router-link class="btn btn-primary" to="/short">Short new link</router-link>
      
      <table class="table">
        <tbody>
          <tr>
            <td>1.</td>
            <td>Judul</td>
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
  .container {
    width: 90%;
    margin: 0 auto;
  }
</style>