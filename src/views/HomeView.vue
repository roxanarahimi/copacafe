<template>
  <the-menu/>
  <the-carousel />
  <products/>
  <coffee />
  <about/>
  <the-footer />
</template>

<script>
// @ is an alias to /src
import TheMenu from '@/components/Menu.vue'
import TheCarousel from '@/components/Carousel.vue'
import Products from '@/components/Products.vue'
import Coffee from '@/components/Coffee.vue'
import About from '@/components/About.vue'
import TheFooter from '@/components/Footer.vue'
import {onMounted} from "vue";

export default {
  name: 'HomeView',
  components: {
    TheMenu, TheCarousel, Products, Coffee, About, TheFooter
  },
  setup(){
    onMounted(()=>{
      document.querySelector('.bs').setAttribute('href','/bootstrap-5.3.2-dist/css/bootstrap.rtl.css')
      document.querySelector('.style').setAttribute('href','/css/style.css')
    })
}}
</script>
