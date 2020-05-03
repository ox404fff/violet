import Vue from 'vue'
import App from './App'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.config.productionTip = false;

Vue.use(VueYandexMetrika, {
  id: 62527144,
  router: router,
  env: process.env.NODE_ENV
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
