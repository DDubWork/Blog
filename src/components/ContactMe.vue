<template>
  <div class="bg-beige">
    <h1 class="py-4 text-center font-medium text-2xl"></h1>
    <div class="flex justify-center">
      <form>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex flex-col w-1/2">
              <label for="fname">Name:</label>
              <input
                v-model="formData.formfirstname"
                name="name"
                type="text"
                class="border rounded px-2 py-1"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="email">Email:</label>
              <input
                v-model="formData.formlastname"
                name="email"
                type="text"
                class="border rounded px-2 py-1"
              />
            </div>
          </div>
          <div class="flex pb-6 flex-col">
            <label for="message">message:</label>
            <textarea
              v-model="formData.formcontents"
              name="message"
              type="text"
              class="border px-2 py-1"
            ></textarea>
          </div>
        </div>
      </form>
      <button @click="formSubmit()">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        message: '',
        name: '',
        email: '',
      },
    }
  },
  methods: {
    async formSubmit() {
      try {
        const response = await fetch('http://localhost:8000/form-submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
        this.formData.name = ''
        this.formData.email = ''
        this.formData.message = ''
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
