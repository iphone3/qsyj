import Vue from 'vue'
import App from './App.vue'

// 第一步: 导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Axios
import Axios from 'axios'
// Vue原型属性
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false

// 懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);	

// 国际化
// import { Locale } from 'vant';
// import zhTW from 'vant/lib/locale/lang/zh-TW';
// Locale.use('zh-TW', zhTW);


// 状态管理Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义状态管理器
var store = new Vuex.Store({
	state:{	// 定义状态
		goodsDetailShow: false,
		goodsItemId: 0
	},
	mutations:{	// 定义方法
		changeGoodsDetailShow(state){
			state.goodsDetailShow = !state.goodsDetailShow
		},
		changeGoodsItemId(state, goodsID){
			state.goodsItemId = goodsID
		}
	}
})


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
	router,
	store	// 状态管理器
}).$mount('#app')
