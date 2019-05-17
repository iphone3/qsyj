<template>
	<div class="cart-view">
		购物车
	</div>
</template>

<script>
	export default{
		name:'cartView',
		data() {
			return {
				title: '购物车',
				navViewShow: true
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
