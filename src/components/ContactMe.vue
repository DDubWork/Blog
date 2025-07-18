<template>
  <div class="bg-beige">
    <h1 class="py-4 text-center font-medium text-2xl"></h1>
    <div class="flex justify-center">
      <form>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex flex-col w-1/2">
              <label for="fname">First Name:</label>
              <input
                v-model="formfirstname"
                name="fname"
                type="text"
                class="border rounded px-2 py-1"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="lname">Last Name:</label>
              <input
                v-model="formlastname"
                name="lname"
                type="text"
                class="border rounded px-2 py-1"
              />
            </div>
          </div>
          <div class="flex pb-6 flex-col">
            <label for="contents">Contents:</label>
            <textarea
              v-model="formcontents"
              name="contents"
              type="text"
              class="border px-2 py-1"
            ></textarea>
          </div>
          <button type="submit" value="Submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formfirstname: this.formfirstname,
      formlastname: this.formlastname,
      formcontents: this.formcontents,
    }
  },
}
</script>
