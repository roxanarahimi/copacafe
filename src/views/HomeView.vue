<template>
  <div class=" fixed-top bg-white" style="box-shadow: 0 4px 4px 0 rgba(0,0,0,.03);">
  <nav class="navbar navbar-expand-lg  pt-4" >
    <div class="container-fluid">

      <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse pt-4" id="navbarScroll">
        <ul class="navbar-nav ms-auto mb-0 my-lg-0 navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">خانه</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">محصولات</a>
          </li>
        </ul>
        <a class="navbar-brand mx-0" href="#" style="margin-top: -40px;">
          <img src="/img/logo.png" class="" width="150px" alt="">
        </a>
        <ul class="navbar-nav me-auto mb-0 my-lg-0 navbar-nav-scroll" >
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">درباره ما</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">تماس با ما</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false"  style="height: calc(100vh - 103px); margin-top:103px;" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner h-100" >
    <div class="carousel-item active h-100" data-bs-interval="3000">
      <img src="/img/bg.jpg" class="d-block h-100 text-center" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item h-100" data-bs-interval="3000">
      <img src="/img/bg.jpg" class="d-block h-100 text-center" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
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
  <div id="products" class=" row justify-content-center min-vh-100" style="padding-top: 100px">
    <div class="row col-10  ">
      <div class="col-5"></div>
      <div class="row mb-5 px-4 col-7">
        <div class="col-4 d-grid">
          <p class="align-self-end m-0">قهوه فوری</p>
        </div>
        <div class="col-8 p-0 d-flex justify-content-between">
          <div v-for="(index,item) in 5" :key="index" class="category "  style="padding:3px; border: 1px #004400 solid" >
            <div :class="{'my-bg': index == 1} " class="w-100 h-100 rounded " style=" background-color: #e2e2e2">
              <i class="bi bi-cup-hot"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card border-0 rounded-4">
          <div class="card-body">
            <div class="card-img mb-3">
              <img src="/img/cc.webp" class="img-fluid" alt="">
            </div>
            <div class="card-title">
              <p>قهوه فوری</p>
              <small>بسته 500 گرمی</small>
            </div>
          </div>
        </div>

      </div>
      <div class="col-7">
        <div class="row">
          <div v-for="item in 6" class="col-4 px-4 mb-4">
            <div class="card rounded-4">
              <div class="card-body">
                <div class="card-img mb-3">
                  <img src="/img/cc.webp" class="img-fluid" alt="">
                </div>
                <div class="card-title">
                  <p>قهوه فوری</p>
                  <small>بسته 500 گرمی</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
