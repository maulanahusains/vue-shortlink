<template>
  <main>
    <div class="container">
      <h3>All shorted link you make</h3>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Shorted Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anjay ini judul</td>
            <td>urlbae.com</td>
            <td>
              <a href="" class="btn btn-info">detail</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>

  th {
    padding: 0.25rem;
  }

  td {
    padding: 1rem;
  }

  table {
    border-collapse: collapse;
  }
</style>