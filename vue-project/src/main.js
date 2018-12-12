import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import List from './components/List.vue'
import Stat from './components/Statistics.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: HomePage},
		{path: '/list', component: List},
		{path: '/stat', component: Stat}
	]
})

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
