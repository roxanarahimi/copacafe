<template>
  <div id="products" class=" scrollElement row justify-content-center min-vh-100" style="padding-top: 70px">

    <div class="text-center mb-5">
      <div class="rounded-3 d-inline-block p-1" style="border: 1px solid #004400">
        <h1 class="my-bg d-inline-block mx-auto p-4 rounded-3 mb-0">محصولات کوپاکافه</h1>
      </div>

    </div>
    <div class="row col-10  ">
      <div class="d-none d-lg-block col-5"></div>
      <div class="row mb-5 px-2 col-lg-7 flex-row-reverse">
        <div class="col-lg-8 p-0 d-flex justify-content-between mb-4 px-lg-4 mb-lg-0">
          <div v-for="(index,item) in 5" :key="index" class="category " style="padding:3px; border: 1px #004400 solid">
            <div :class="{'my-bg': index == 1} " class="w-100 h-100 rounded " style=" background-color: #e2e2e2">
              <i class="bi bi-cup-hot"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-grid">
          <p class="align-self-end m-0 ">قهوه فوری</p>
        </div>

      </div>

      <div class="row flex-row-reverse">
        <div class="col-lg-7">
          <div class="row  d-none d-lg-flex">
            <div v-for="item in 6" class="col-4 px-3 mb-4">
              <div class="card rounded-4">
                <div class="card-body pt-5">
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
          <div class=" d-lg-none w-100" style=" overflow-x: scroll">
            <div class="d-flex" style="min-width: 100%;">
              <div v-for="item in 6" class=" col-6 px-2 mb-3" style="width: 180px !important">
                <div class="card rounded-3 w-100">
                  <div class="card-body pt-4">
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
        <div class="col-lg-5">
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

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Products"
}
</script>

<style scoped>

</style>