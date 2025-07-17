<template>
  <hero></hero>
  <featuredBlogs></featuredBlogs>
  <ContactMe></ContactMe>
</template>

<script>
import hero from '../hero.vue'
import FeaturedBlogs from '../BlogPanelLarge.vue'
import ContactMe from '../ContactMe.vue'

export default {
  components: {
    hero,
    FeaturedBlogs,
    ContactMe,
  },
}
</script>
