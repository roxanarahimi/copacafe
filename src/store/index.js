import { createStore } from 'vuex'

export default createStore({
  state: {
    panelUrl: 'https://panel.copacaffee.webagent.ir',
    slides: null,
    productsCats: null,
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
    }
  },
  actions: {
    getSlides(context) {
      context.commit('getSlides');
    },
    getProductCats(context) {
      context.commit('getProductCats');
    }
  }
})
