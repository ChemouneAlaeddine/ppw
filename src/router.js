import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';
import Stat from './components/Statistics.vue';
import Campus from './components/campus.vue';
import fac from './components/fac.vue';
import profile from './components/profile.vue';

export default new Router({
	mode: 'history',
	routes: [{path: '/', component: HomePage},
	{path: '/list', component: List},
	{path: '/campus', component: Campus},
	{path: '/stat', component: Stat},
	{path: '/profile/:id/:name/:surname?', component: profile},
	{path: '/fac/:id?', component: fac}]
});