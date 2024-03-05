<template>
  <div id="home" class="carousel carousel-dark slide scrollElement" data-bs-ride="carousel" data-bs-pause="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner h-100">
      <div class="carousel-item px-lg-3 active h-100" data-bs-interval="3000">
        <div class="row align-self-center d-none d-lg-flex flex-row-reverse h-100">
          <div class="col-lg-7 h-100 d-grid">
            <img src="/img/slide1.png" class="img-fluid align-self-center" alt="">
          </div>
          <div class="col-lg-5 h-100 d-grid"  style="background:url('/img/slideBg.png') top right no-repeat; background-size: 100%">
            <div class="carousel-text align-self-center text-light  fw-bolder mt-4">
              <p class="ps-4">کوپاکافه</p>
              <p class="ps-4">طعم واقعی قهوه</p>
            </div>
          </div>
        </div>
        <div class="row align-self-center d-lg-none h-100 p-2" style="background:url('/img/slideBg2.png') bottom right no-repeat; background-size: 100%;">
          <div class="col-12 d-grid">
            <img src="/img/slide1.png" class="img-fluid align-self-center me-auto" alt="">
          </div>
          <div class="col-12 d-grid">
            <div class="carousel-text align-self-end text-light  fw-bolder mt-4 pb-5 mb-5" style="font-size:35px">
              <p class="ps-4">کوپاکافه</p>
              <p class="ps-4">طعم واقعی قهوه</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item px-lg-3 h-100" data-bs-interval="3000">
        <div class="row align-self-center d-none d-lg-flex flex-row-reverse h-100">
          <div class="col-lg-7 h-100 d-grid">
            <img src="/img/slide2.png" class="img-fluid align-self-center me-auto" alt="">
          </div>
          <div class="col-lg-5 h-100 d-grid"  style="background:url('/img/slideBg.png') top right no-repeat; background-size: 100%">
            <div class="carousel-text align-self-center text-light pb-5  fw-bolder mt-4">
              <p class="ps-4">کوپاکافه</p>
              <p class="ps-4">دنیای تنوع و کیفیت</p>
            </div>
          </div>

        </div>
        <div class="row align-self-center d-lg-none h-100 p-2" style="background:url('/img/slideBg2.png') bottom right no-repeat; background-size: 100%;">
          <div class="col-12 d-grid">
            <img src="/img/slide2.png" class="img-fluid align-self-center" alt="">
          </div>
          <div class="col-12 d-grid"  >
            <div class="carousel-text align-self-end text-light  fw-bolder mt-4 mb-5 pb-5" style="font-size:35px">
              <p class="ps-4">کوپاکافه</p>
              <p class="ps-4">دنیای تنوع و کیفیت</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>

</style>