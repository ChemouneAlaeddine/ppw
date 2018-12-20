import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';
import Stat from './components/Statistics.vue';
import Campus from './components/campus.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: HomePage},
		{path: '/list', component: List},
		{path: '/campus', component: Campus},
		{path: '/stat', component: Stat}
	]
});

Vue.config.productionTip = false;

new Vue({
	router,
  render: h => h(App)
}).$mount('#app');
