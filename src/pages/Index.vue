<script setup>
  import { inject, onBeforeMount, ref } from 'vue';
  import Modal from '../components/Modal.vue';

  const axios = inject('axios');
  const data = ref({});
  const modalConfig = ref({ open: false, data: [{}] });
  const copied = ref(false);

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

  const openModal = (id) => {
    modalConfig.value.data = data.value.data.urls.filter(element => element.id === id);
    modalConfig.value.open = true;
    console.log(modalConfig);
  }

  const closeModal = () => {
    modalConfig.value.open = false;
  }

  const copy = async (str) => {
    try {
      await toClipboard(str);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 3000);
    } catch (e) {
      console.error(e)
    }
  }

  const deleteData = async(id) => {
    await axios.delete(`/api/url/${id}/delete`)
    .then(response => {
      console.log(response.data);
      location.reload()
      // closeModal();
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
          <tr v-for="item, index in data.data.urls">
            <td>{{ index + 1 }}.</td>
            <td>{{ item.title || item.longurl }}</td>
            <td>{{ item.shorturl }}</td>
            <td>
              <button @click="openModal(item.id)" class="btn btn-info">detail</button>
            </td>
          </tr>
          <Modal v-show="modalConfig.open" @close="closeModal" @deleteData="deleteData(modalConfig.data[0].id)">
            <template #header>
              <p>
                Detail shortlink <strong>{{ modalConfig.data[0].title || null }}</strong>
              </p>
            </template>
            <template #body>
              <table>
                <tr>
                  <th>id</th>
                  <td>:</td>
                  <td>{{ modalConfig.data[0].id }}</td>
                </tr>
                <tr>
                  <th>Sebelum di short</th>
                  <td>:</td>
                  <td>{{ modalConfig.data[0].longurl }}</td>
                </tr>
                <tr>
                  <th>Shortlink</th>
                  <td>:</td>
                  <td>
                    {{ modalConfig.data[0].shorturl }}
                    <button @click="copy(modalConfig.data[0].shorturl)">copy</button>
                    <span v-if="copied" class="copied">copied!</span>
                  </td>
                </tr>
                <tr>
                  <th>Tanggal Dibikin</th>
                  <td>:</td>
                  <td>{{ modalConfig.data[0].date }}</td>
                </tr>
              </table>
            </template>
          </Modal>
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