<template>
	<div class="selling-view">
		<GoodsItemView v-for='(goods, index) in sellings' :goods='goods' :key='index'></GoodsItemView>
	</div>
</template>

<script>
	import GoodsItemView from '../GoodsItemView/GoodsItemView.vue'
	
	export default{
		name:'sellingView',
		components:{
			GoodsItemView
		},
		data() {
			return {
				sellings: []
			}
		},
		created() {
			var that = this
			this.$ajax.get('/json/selling-list.json')
				.then(function(response){
					// console.log(response.data)
					that.sellings = response.data
				})
				.catch(function(err){
					console.log(err)
				})
		}
	}
</script>

<style>
	.selling-view{
		border-top: 0.0625rem solid #bbbbbb;
		border-left: 0.0625rem solid #bbbbbb;
		overflow: hidden;
	}
</style>
