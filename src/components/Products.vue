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
              <div class="col-lg-12 p-0 d-flex justify-content-between mb-4 px-lg-4 mb-lg-0">
                <div v-for="(item,index) in productsCats" :key="index" class="category my-border mx-1 mx-lg-0">
                  <div  :id="'cat'+index" class="w-100 h-100 rounded category-inner" :title="item.title" :class="{'category-active': index == 0} " @click="categoryToggle(item,index)">
<!--                    <i class="bi bi-cup-hot"></i>-->
                    {{ item.title }}
                  </div>
                </div>
              </div>
<!--              <div class="col-lg-5 d-grid">-->
<!--                <p class="align-self-end m-0 active-category">{{ categoryTitle }}</p>-->
<!--              </div>-->
            </div>
          </div>
          <div class="products-container">
            <div class="px-0 mx-0 products-inner">
              <div v-for="(item,index) in products" :key="index" class="col-6 col-lg-4 px-1 px-lg-3 mb-4">
                <div class="card rounded-4 cursor-pointer product-card" :id="'product'+index" :class="{'product-active': index == 0}" @click="productToggle(item,index)">
                  <div class="card-body pt-lg-5">
                    <div class="product-card-img card-img mb-3">
                      <img :src="url+item.image1" class="img1 img-fluid" alt="">
                      <img v-if="item.image2" :src="url+item.image2" class="img2 img-fluid d-none" alt="">
                    </div>
                    <div class="card-title">
                      <p class="mb-lg-2">{{ item.title }}</p>
                      <small>{{ item.subTitle }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div v-if="product" class="card border-0 rounded-4  mt-lg-5 pt-lg-4">
            <div class="card-body">
              <div class="card-img text-center ">
                <img id="active-product-img" :src="url+product.image1" class="img-fluid" alt="">
              </div>
              <div class="d-flex justify-content-center mb-3">
                <div id="active-product-img-1" class="card mx-2 cursor-pointer active-product-img-active p-1 " @click="activeProductImgToggle(1)" style="width: 100px">
                  <div class="card-img">
                    <img :src="url+product.image1" class="img-fluid" alt="">
                  </div>
                </div>
                <div id="active-product-img-2" class="card mx-2 cursor-pointer p-1" @click="activeProductImgToggle(2)" style="width: 100px">
                  <div class="card-img">
                    <img :src="url+product.image2" class="img-fluid" alt="">
                  </div>
                </div>
            </div>
              <div class="card-title">
                <h3>{{ product.title }}</h3>
                <h5>{{ product.subTitle }}</h5>
                <p>
                  {{ product.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onBeforeMount, ref} from "vue";
export default {
  name: "Products",
  setup(){
    const store = useStore();
    const url = store.state.panelUrl;
    const products = computed(()=>store.state.products);
    const productsCats= computed(()=>store.state.productsCats);
    // const categoryTitle= ref('');

    const product = ref({});
    const getCategories = () => {
      store.commit('getProductCats');
    };
    const getData = (id) => {
      store.commit('getProducts', id);
    };
    onBeforeMount(() => {
      getCategories();
      setTimeout(()=>{
        getData(productsCats.value[0].id);
        // categoryTitle.value = productsCats.value[0].title;
        product.value = productsCats.value[0].products[0];
      },1000)

    });
    const categoryToggle = (category,index)=>{
      document.querySelector('.category-active').classList.remove('category-active');
      document.querySelector('#cat'+index).classList.add('category-active');
      getData(category.id);
      // categoryTitle.value = category.title;
      setTimeout(()=>{
        productToggle(category.products[0],0);
      },300)
    }
    const productToggle = (item,index)=>{
      document.querySelector('.product-active').classList.remove('product-active');
      document.querySelector('#product'+index).classList.add('product-active');
        product.value = item;
      activeProductImgToggle(1)
    }
const activeProductImgToggle = (index)=>{
      document.querySelector('.active-product-img-active ').classList.remove('active-product-img-active');
      document.querySelector('#active-product-img-'+index).classList.add('active-product-img-active');
      document.querySelector('#active-product-img').setAttribute('src',url+product.value['image'+index]);
    }

    return{
      products,
      productsCats,
      getData, getCategories,store,url,
      categoryToggle,productToggle, product,activeProductImgToggle,
      // categoryTitle
    }
  }
}
</script>

<style scoped>
.product-card-img:hover .img1{
  display: none !important;
}
.product-card-img:hover .img2{
  display: block !important;
}
</style>