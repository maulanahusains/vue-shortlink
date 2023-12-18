<script setup>
  import { inject, ref } from 'vue';
  import useClipboard from 'vue-clipboard3';

  const { toClipboard } = useClipboard()
  const axios = inject('axios');
  const inputAliases = ref(false);
  const shortened = ref({link: '', shorted: false});
  const inputan = ref({ input: '', aliases: '' });
  
  async function ShortLink() {
    await axios.post('/api/url/add', { 'url': inputan.value.input, 'custom': inputan.value.aliases || '', 'domain': 'https://urlbae.com'})
    .then(response => {
      shortened.value.link = response.data.shorturl;
      shortened.value.shorted = true;
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    });
  }

  const copy = async () => {
    try {
      await toClipboard(shortened.value.link)
      alert('Copied to clipboard')
    } catch (e) {
      console.error(e)
    }
  }

</script>

<template>
  <main>
    <section class="container">
      <form @submit.prevent="ShortLink">
        <div class="input-btn">
          <input type="text" placeholder="long url that want to be shorted" v-model="inputan.input">
          <button type="submit" class="btn btn-primary">Shorten!</button>
        </div>
        <div class="custom-alias">
          <div class="checkbox">
            <input type="checkbox" id="ca" v-model="inputAliases">
            <label for="ca">Custom Alias</label>
          </div>
          <div v-if="inputAliases">
            <input type="text" placeholder="urlbae.com/aliases" v-model="inputan.aliases">
          </div>
        </div>
      </form>
      <div class="message" v-if="shortened.shorted">
        <h4 style="margin-bottom: 0;">Link shortened!</h4>
        <p class="links">
          <strong>{{ shortened.link }}</strong>
          <button class="copy" @click="copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" class="ionicon" viewBox="0 0 512 512"><path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>
          </button>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>

  .input-btn {
    display: flex;
    gap: 0.5rem;
  }

  input[type='text'] {
    width: 20rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .copy {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
</style>
