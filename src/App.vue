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
</style>
