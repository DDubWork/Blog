<template>
  <h1>Create Blog</h1>
  <form>
    <label for="Title">Title:</label>
    <input v-model="titleF" name="Title" />
    <label for="Contents">Contents:</label>
    <input v-model="contentF" name="Contents" />
    <button type="button" @click="submitBlog()">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titleF: '',
      contentF: '',
    }
  },
  methods: {
    async submitBlog() {
      const url = 'http://localhost:8000/'
      try {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.titleF,
            content: this.contentF,
          }),
        })
        this.titleF = ''
        this.contentF = ''
      } catch (err) {
        console.log('error', err)
      }
    },
  },
}
</script>
