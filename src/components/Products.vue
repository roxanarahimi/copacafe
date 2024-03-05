<template>
  <div id="products" class=" scrollElement row px-0 mx-0 justify-content-center min-vh-100" style="padding-top: 70px">

    <div class="text-center mb-5">
      <div class="rounded-3 d-inline-block p-1 my-border">
        <h1 class="my-bg d-inline-block mx-auto p-4 rounded-3 mb-0">محصولات کوپاکافه</h1>
      </div>

    </div>
    <div class="row col-lg-11 px-0 mx-0">

      <div class="row px-0 mx-0 flex-row-reverse">


        <div class="col-lg-7  px-4 px-lg-0">
          <div class="row px-0 mx-0 ">
            <div class="row px-0 mx-0 flex-row-reverse mb-5">
              <div class="col-lg-7 p-0 d-flex justify-content-between mb-4 px-lg-4 mb-lg-0">
                <div v-for="(index,item) in 5" :key="index" class="category my-border">
                  <div  :id="'cat'+index" class="w-100 h-100 rounded category-inner" :class="{'category-active': index == 1} " @click="categoryToggle(index)">
                    <i class="bi bi-cup-hot"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 d-grid">
                <p class="align-self-end m-0 ">قهوه فوری</p>
              </div>
            </div>
          </div>
          <div class="products-container">
            <div class="px-0 mx-0 products-inner">
              <div v-for="(index,item) in 6" :key="index" class="col-6 col-lg-4 px-1 px-lg-3 mb-4">
                <div class="card rounded-4 cursor-pointer product-card" :id="'product'+index" :class="{'product-active': index == 1}" @click="productToggle(index)">
                  <div class="card-body pt-lg-5">
                    <div class="card-img mb-3">
                      <img src="/img/cc.webp" class="img-fluid" alt="">
                    </div>
                    <div class="card-title">
                      <p class="mb-lg-2">قهوه فوری</p>
                      <small>بسته 500 گرمی</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card border-0 rounded-4  mt-lg-5 pt-lg-4">
            <div class="card-body">
              <div class="card-img mb-3">
                <img src="/img/cc.webp" class="img-fluid" alt="">
              </div>
              <div class="card-title">
                <h3>قهوه فوری</h3>
                <h5>بسته 500 گرمی</h5>
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
  name: "Products",
  setup(){
    const categoryToggle = (index)=>{
      document.querySelector('.category-active').classList.remove('category-active');
      document.querySelector('#cat'+index).classList.add('category-active');
      productToggle(1);
    }
    const productToggle = (index)=>{
      document.querySelector('.product-active').classList.remove('product-active');
      document.querySelector('#product'+index).classList.add('product-active');
    }

    return{
      categoryToggle,productToggle,
    }
  }
}
</script>

<style scoped>

</style>