<script>
import navbar from './components/navbar.vue'
import copyright from './components/copyright.vue'

export default {
  components: {
    navbar,
    copyright,
  },
}
</script>

<template>
  <navbar class="z-2 top-0 sticky w-full"></navbar>
  <router-view></router-view>
  <copyright></copyright>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

body {
  font-family: 'Inter';
}
</style>
