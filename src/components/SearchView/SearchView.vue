<template>
	<div class="search-view">
		搜索
	</div>
</template>

<script>
	export default{
		name:'searchView',
		data() {
			return {
				title: '搜索',
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
