<template>
  <div id="home" class="scrollElement">
    <div id="slider" v-if="data?.length" class="carousel carousel-dark slide h-100" data-bs-ride="carousel" data-bs-pause="false">
      <div class="carousel-indicators">
        <button v-for="(item,index) in data" :key="index" type="button" data-bs-target="#slider" :data-bs-slide-to="index" :class="{'active': index == 0}" aria-current="true" :aria-label="'Slide '+index"></button>
      </div>
      <div class="carousel-inner h-100">
        <div v-for="(item,index) in data" :key="index" class="carousel-item  h-100" :class="{'active': index == 0}" data-bs-interval="3000">
          <div class="row align-self-center d-none d-lg-flex flex-row-reverse h-100">
            <div class="col-lg-7 h-100 d-grid">
              <img :src="url+item.image" class="img-fluid align-self-center me-auto pe-lg-4" alt="">
            </div>
            <div class="col-lg-5 h-100 d-grid" style="background:url('/img/slideBg.png') top right no-repeat; background-size: 100%">
              <div class="carousel-text align-self-center text-light pb-5  fw-bolder mt-4">
                <p class="ps-4">{{ item.title }}</p>
                <p class="ps-4">{{ item.subTitle }}</p>
              </div>
            </div>
          </div>
          <div class="row align-self-center d-lg-none h-100 p-2" style="background:url('/img/slideBg2.png') bottom right no-repeat; background-size: 100%;">
            <div class="col-12 d-grid">
              <img :src="url+item.image" class="img-fluid align-self-center" alt="">
            </div>
            <div class="col-12 d-grid">
              <div class="carousel-text align-self-end text-light  fw-bolder mt-4 mb-5 pb-5" style="font-size:35px">
                <p class="ps-4">{{ item.title }}</p>
                <p class="ps-4">{{ item.subTitle }}</p>
              </div>
            </div>

          </div>
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
    const getData = () => {
      store.commit('getSlides');
    };
    onMounted(() => {
      getData();
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