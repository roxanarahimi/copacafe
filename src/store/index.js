import { createStore } from 'vuex'

export default createStore({
  state: {
    panelUrl: 'https://panel.copacaffee.webagent.ir',
    slides: null,
    productsCats: null,
    products: null,
    product: null,
  },
  mutations: {
    getSlides(state) {
      axios.get(state.panelUrl + '/api/slide')
          .then((response) => {
            state.slides = response.data;
          }).catch();
    },
   getProductCats(state) {
      axios.get(state.panelUrl + '/api/category/product')
          .then((response) => {
            state.productsCats = response.data;
          }).catch();
    },
    getProducts(state,id) {
      axios.get(state.panelUrl + '/api/product?cat='+id)
          .then((response) => {
            state.products = response.data;
          }).catch();
    },
    getProduct(state, id) {
      axios.get(state.panelUrl + '/api/product/' + id)
          .then((response) => {
            state.product = response.data.product;
          }).then((response) => {
        // if (state.product.features) {
        //     state.productFeatures = [];
        //     for (let i = 0; i < JSON.parse(state.product.features).length; i++) {
        //         state.productFeatures.push(JSON.parse(state.product.features)[i]);
        //     }
        // }
      }).catch();
    }
  },
  actions: {
    getSlides(context) {
      context.commit('getSlides');
    },
    getProductCats(context) {
      context.commit('getProductCats');
    },
    getProducts(context) {
      context.commit('getProducts');
    },
    getProduct(context) {
      context.commit('getProduct');
    },
  }
})
