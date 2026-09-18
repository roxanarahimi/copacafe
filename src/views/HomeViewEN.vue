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
import TheMenu from '@/components/EN/Menu.vue'
import TheCarousel from '@/components/EN/Carousel.vue'
import Products from '@/components/EN/Products.vue'
import Coffee from '@/components/EN/Coffee.vue'
import About from '@/components/EN/About.vue'
import TheFooter from '@/components/EN/Footer.vue'
import {onMounted} from "vue";

export default {
  name: 'HomeView',
  components: {
    TheMenu, TheCarousel, Products, Coffee, About, TheFooter,
  },
  setup(){
    onMounted(()=>{
      document.querySelector('.bs').setAttribute('href','/bootstrap-5.3.2-dist/css/bootstrap.min.css')
      document.querySelector('.style').setAttribute('href','/css/styleEN.css')
    })
  }
}
</script>
