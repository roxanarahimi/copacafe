<template>
  <the-menu/>
  <carousel />
  <products/>
  <coffee />
  <about/>
  <the-footer />
</template>

<script>
// @ is an alias to /src
import TheMenu from '@/components/Menu.vue'
import Carousel from '@/components/Carousel.vue'
import Products from '@/components/Products.vue'
import Coffee from '@/components/Coffee.vue'
import About from '@/components/About.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    TheMenu, Carousel, Products, Coffee, About, TheFooter
  }
}
</script>
