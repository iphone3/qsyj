<template>
	<div class="assort-view">
		分类
	</div>
</template>

<script>
	export default{
		name:'assortView',
		data() {
			return {
				title: '分类',
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
