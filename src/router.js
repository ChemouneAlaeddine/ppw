import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';
import Stat from './components/Statistics.vue';
import Campus from './components/campus.vue';
import fac1 from './components/fac1.vue';
import fac2 from './components/fac2.vue';
import fac3 from './components/fac3.vue';
import fac4 from './components/fac4.vue';
import fac5 from './components/fac5.vue';

export default new Router({
	mode: 'history',
	routes: [
	  	{path: '/', component: HomePage},
		{path: '/list', component: List},
		{path: '/campus', component: Campus},
		{path: '/stat', component: Stat},
		{path: '/stat', component: Stat},
		{path: '/fac/1', component: fac1},
		{path: '/fac/2', component: fac2},
		{path: '/fac/3', component: fac3},
		{path: '/fac/4', component: fac4},
		{path: '/fac/5', component: fac5}
	]
});