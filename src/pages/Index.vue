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
  .container {
    width: 90%;
    margin: 0 auto;
  }

  th {
    padding: 4px;
  }

  td {
    padding: 16px;
  }

  table {
    border-collapse: collapse;
  }
</style>