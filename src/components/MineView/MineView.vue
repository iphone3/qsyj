<template>
	<div class="mine-view">
		我的
	</div>
</template>

<script>
	export default{
		name:'mineView',
		data() {
			return {
				title: '我的',
				navViewShow: false
			}
		},
		created() {
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		}
	}
</script>

<style>
</style>
