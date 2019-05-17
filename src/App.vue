<template>
	<div id="app">
		<!-- 头部-导航栏 -->
		<NavView></NavView>

		<!-- 主体内容 -->
		<!-- 路由规则匹配到的组件 渲染位置 -->
		<router-view></router-view>

		<!-- 底部通栏 -->
		<TarbarView></TarbarView>
	</div>
</template>

<script>
	import NavView from './components/NavView/NavView.vue'
	import TarbarView from './components/TarbarView/TarbarView.vue'

	export default {
		name: 'app',
		components: {
			NavView,
			TarbarView
		}
	}
</script>

<style>
</style>
