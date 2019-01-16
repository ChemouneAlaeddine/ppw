import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import List from './components/List.vue';
import Stat from './components/Statistics.vue';
import Campus from './components/campus.vue';
import ufs from './components/ufs.vue';
import profile from './components/profile.vue';
import Form from './components/addStudent.vue';
import LoginComponent from './components/login.vue';

export default new Router({
	mode: 'history',
	routes: [
		/*{path: '/', 
	/*redirect: {
		name: "login"
	}
},*/
	//component: HomePage},
	{path: '/', 
		name: "login",
		component: LoginComponent
	},
	{path: '/Home',
		name: 'Home',
		component: HomePage
	},
	{path: '/ufs/:id1?/list/:id2?', component: List},
	{path: '/campus', component: Campus},
	{path: '/stat', component: Stat},
	{path: '/ufs/:id1?/list/:id2?/profile/:id3?', component: profile},
	{path: '/ufs/:id?', component: ufs},
	{path: '/ufs/:id1?/list/:id2?/form', component: Form}]
});