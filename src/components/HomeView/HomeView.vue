<template>
	<div class="home-view">
		首页
	</div>
</template>

<script>
	export default{
		name:'homeView',
		data() {
			return {
				title: '全视眼镜商城',
				navViewShow: true
			}
		},
		created() {
			// 发送标题
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		}
	}
</script>

<style>
	
</style>
