<template>
	<div class="cart-item-view">
		<div class="cart-checkbox">
			<van-checkbox v-model="checked" checked-color="red" class='chekbox'></van-checkbox>
			<span></span>
		</div>
		
		<div class="cart-img">
			<img :src="cart.img" alt="">
			<span></span>
		</div>
		
		<div class="cart-detail">
			<div class="goods-detail">
				<span>特价</span>
				<span>{{cart.name}}</span>
			</div>
			<p>￥{{cart.price}}</p>
			<p>x{{cart.num}}</p>
		</div>
	</div>
</template>

<script>
	import { Checkbox } from 'vant';
	
	export default{
		name: 'cartItemView',
		props: ['cart'],
		components:{
			[Checkbox.name]:Checkbox
		},
		data() {
			return {
			  checked: true
			};
		  }
	}
</script>

<style>
	@import url("../../temp.css");
</style>
