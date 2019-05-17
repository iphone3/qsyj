import Vue from 'vue'
import App from './App.vue'

// 第一步: 导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

// 第二步: 导入组件
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CartView from './components/CartView/CartView.vue'
import MineView from './components/MineView/MineView.vue'

// 第三步: 定义路由规则
var routes = [
	{
		path: '/',
		// component: HomeView
		redirect: '/home'
	},
	{
		path: '/home',
		component: HomeView
	},
	{
		path: '/assort',
		component: AssortView
	},
	{
		path: '/search',
		component: SearchView
	},
	{
		path: '/cart',
		component: CartView
	},
	{
		path: '/mine',
		component: MineView
	},
]

// 第四步: 创建路由对象
var router = new VueRouter({
	// routes:routes
	routes
})

new Vue({
  render: h => h(App),
	// 第五步: 添加路由管理器
	router
}).$mount('#app')
