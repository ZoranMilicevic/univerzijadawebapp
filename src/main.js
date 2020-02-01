import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.use(BootstrapVue)
Vue.use(StarRating)
Vue.component('star-rating', StarRating);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
