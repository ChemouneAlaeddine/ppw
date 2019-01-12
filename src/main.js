import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import VueRouter from 'vue-router';
import Resource from 'vue-resource';
import vSelect from 'vue-select';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Resource);
Vue.use(vSelect);
Vue.component('v-select', vSelect);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');