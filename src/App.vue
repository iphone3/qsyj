<template>
	<div id="app">
		<!-- 头部-导航栏 -->
		<van-nav-bar
			:title="title"
			fixed
			v-show='navViewShow'
		/>

		<!-- 主体内容 -->
		<!-- 路由规则匹配到的组件 渲染位置 -->
		<router-view @onTitle='getTitle' @onNavShow='getShow'></router-view>

		<!-- 底部通栏 -->
		<van-tabbar v-model="active" active-color='red'>
			<van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
			<van-tabbar-item icon="filter-o" to='/assort'>分类</van-tabbar-item>
			<van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
			<van-tabbar-item icon="cart-o" to='/cart' info="20">购物车</van-tabbar-item>
			<van-tabbar-item icon="contact" to='/mine'>我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import {
		NavBar,
		Tabbar, 
		TabbarItem
	} from 'vant';

	export default {
		name: 'app',
		components: {
			[NavBar.name]:NavBar,
			[Tabbar.name]:Tabbar,
			[TabbarItem.name]:TabbarItem
		},
		data() {
			return {
				title: '',	// 导航标题(子组件传递过来)
				navViewShow: true,// 导航显示或隐藏
				active: 0
			}
		},
		methods:{
			getTitle: function(title){
				this.title = title
			},
			getShow: function(temp){
				this.navViewShow = temp
			}
		},
	}
</script>

<style>
	body{
		background: #f2f2f2;
	}
	
	#app{
		background: #f2f2f2;
	}
	
	.van-nav-bar{
		height: 2.8125rem;
		background: red;
		font-size: 1rem;
		font-weight: 700;
		line-height: 2.8125rem;
		text-align: center;
	}
	.van-nav-bar .van-nav-bar__title{
		color: white;
	}
	
	.van-nav-bar .van-icon{
		color: white;
		font-size: 1rem;
	} 
	
	
	/* transition name='xxxx' 
	* xxx-enter (进入)过渡开始状态
	* xxx-enter-to (进入)过渡结束的状态
	* xxx-enter-active (进入)过渡时间、延迟、曲线
	* xxx-leave (离开)过渡开始状态
	* xxx-leave-to (离开)过渡结束的状态
	* xxx-leave-active (离开)过渡时间、延迟、曲线
	*/
	/* 从右边到左边 */
	.slide-to-left-enter-active,
	.slide-to-left-leave-active{
		transition: all 2s;
	}
	
	.slide-to-left-enter,
	.slide-to-left-leave-to{
		transform: translateX(100%);
	}
	
	
	/* 从底部到顶部 */
	.slide-to-top-enter-active,
	.slide-to-top-leave-active{
		transition: all 2s;
	}
	
	.slide-to-top-enter,
	.slide-to-top-leave-to{
		transform: translateY(100%);
	}
</style>
