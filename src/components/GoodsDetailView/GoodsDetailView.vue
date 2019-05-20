<template>
	<div class="goods-detail-view" @click="back">
		商品详情
	</div>
</template>

<script>
	export default{
		name:'goodsDetailView',
		methods:{
			back: function(){
				this.$store.commit('changeGoodsDetailShow')
			}
		}
	}
</script>

<style>
	.goods-detail-view{
		background: blue;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 99;
	}
</style>
