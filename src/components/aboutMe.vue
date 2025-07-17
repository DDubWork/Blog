<template>
  <div class="border-b-4 border-black bg-warmbeige h-screen flex-col">
    <div class="pb-8 w-full h-40 flex">
      <div class="w-full h-1/5 text-center text-4xl self-center content-center">Hi, im Damian</div>
    </div>
    <div class="content-center items-center h-1/2 flex px-24">
      <div class="pl-30 flex justify-center h-full flex-1/2 flex-col">
        <div class="pb-2 text-lg font-medium">Heres a little about me...</div>
        <div>
          Lorem ipsum dolor sit amet consectetur<br />
          adipisicing elit. Accusantium excepturi molestias<br />
          sunt itaque? Quas libero, placeat eligendi delectus<br />
          vero, maiores doloremque alias repellendus commodi<br />
          voluptate quos sit, unde id illum.
        </div>
      </div>
      <div class="h-full flex-1/2">
        <div class="relative border-2 m-auto w-full h-full">
          <div class="flex bottom-0 h-12 bg-[rgba(256,256,256,.7)] w-full absolute">
            <div class="w-full font-bold text-xl text-center self-center">
              {{ slides[slideshowCounter - 1].desc }}
            </div>
          </div>

          <img class="padding pl-10 w-full h-full" :src="slides[slideshowCounter - 1].src" />
          <div class="w-full text-center">Click Balls</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import slide1 from '../assets/img/Selfie.jpg'
import slide2 from '../assets/img/kpop-Show.jpg'
import slide3 from '../assets/img/Starrynightdesert.jpeg'

export default {
  data() {
    return {
      slideshowCounter: 1,
      slides: [
        { src: slide1, desc: 'Selfie' },
        { src: slide2, desc: 'Photo of mountains' },
        { src: slide3, desc: 'Kpop Show' },
      ],
    }
  },
  methods: {
    incrementUp() {
      if (this.slideshowCounter < this.slides.length)
        this.slideshowCounter = this.slideshowCounter + 1
    },
    incrementDown() {
      if (this.slideshowCounter > 1) {
        this.slideshowCounter = this.slideshowCounter - 1
      }
    },
  },
}
</script>

<style>
button:hover {
  background-color: red;
}

.padding {
  padding-left: 10;
}
</style>
