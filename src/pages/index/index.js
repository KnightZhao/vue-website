// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import App from './index.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'static/images/anime1.jpg',
  loading: 'static/images/loading.gif',
  attempt: 1,
  lazyComponent: true
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
