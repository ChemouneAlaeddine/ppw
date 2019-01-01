import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');