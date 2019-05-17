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
		<TarbarView></TarbarView>
	</div>
</template>

<script>
	import NavView from './components/NavView/NavView.vue'
	import TarbarView from './components/TarbarView/TarbarView.vue'
	import {
		NavBar
	} from 'vant';

	export default {
		name: 'app',
		components: {
			NavView,
			TarbarView,
			[NavBar.name]:NavBar
		},
		data() {
			return {
				title: '',	// 导航标题(子组件传递过来)
				navViewShow: true 	// 导航显示或隐藏
			}
		},
		methods:{
			getTitle: function(title){
				this.title = title
			},
			getShow: function(temp){
				this.navViewShow = temp
			}
		}
	}
</script>

<style>
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
