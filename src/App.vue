<template>
	<div id="app">
		<!-- 头部-导航栏 -->
		<NavView></NavView>

		<!-- 主体内容 -->
		<div class="content">
			主体内容
		</div>

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
