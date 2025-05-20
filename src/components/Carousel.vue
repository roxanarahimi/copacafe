<template>
  <div id="home" class="scrollElement">
    <div id="slider" v-if="data?.length" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false">
      <div class="carousel-indicators">
        <button v-for="(item,index) in data" :key="index" type="button" data-bs-target="#slider" :data-bs-slide-to="index" :class="{'active': index == 0}" aria-current="true" :aria-label="'Slide '+index"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(item,index) in data" :key="index" class="carousel-item" :class="{'active': index == 0}" data-bs-interval="3000">
          <img :src="url+item.image" class="w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

const {onMounted} = require("vue");

export default {
  name: "Carousel",
  setup() {
    const store = useStore();
    const url = store.state.panelUrl;
    const getData = async() => {
      // store.commit('getSlides');
      await store.dispatch('getSlides');

    };
    onMounted(() => {
      getData();
      // alert(window.innerWidth + '*' + window.innerHeight)
      // 1536*626
    });

    return {
      data: computed(() => store.state.slides),
      getData, store, url
    }
  }
}
</script>

<style scoped>

</style>