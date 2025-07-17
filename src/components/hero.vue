<template>
  <div
    :style="{
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundBlendMode: 'darken',
      backgroundImage: `url(${sandImage})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
    }"
  >
    <div class="border-b-4 border-black flex-1 text-white h-full text-center content-center">
      <div class="text-3xl font-bold">Welcome To My Blog!</div>
      <div class="text-1xl">Movie, game reviews, & more!</div>
    </div>
  </div>
</template>

<script>
import sandImage from '../assets/img/sand.jpeg'

export default {
  data() {
    return {
      sandImage,
    }
  },
}
</script>

<style scoped>
/* Optional: You can also add styling here */
</style>
