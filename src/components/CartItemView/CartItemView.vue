<template>
	<div class="cart-item-view">
		<div class="cart-checkbox">
			<van-checkbox v-model="checked" checked-color="red" class='chekbox' @change='onCheckedChange'></van-checkbox>
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
		props: ['cart', 'isChecked', 'index'],
		components:{
			[Checkbox.name]:Checkbox
		},
		data() {
			return {
			  checked: true
			};
		},
		created() {
			this.checked = this.isChecked
		},
		methods:{
			onCheckedChange: function(){
				// console.log(this.checked)
				this.$emit('onChangeChecked', this.checked, this.index)
			},
			onItemViewChange: function(checked){
				this.checked = checked
			}
		}
	}
</script>

<style>
.cart-item-view{
	width: 22.1875rem;
	height: 6.25rem;
	margin: 0.625rem;
	border: 0.0625rem solid #BBBBBB;
	box-shadow: 0 0 4px 0 gray;
	border-radius: 0.5rem;
	background: white;
}

.cart-item-view > .cart-checkbox{
	float: left;
	width: 1.5625rem;
	height: 100%;
	text-align: right;
}
.cart-item-view > .cart-checkbox > .chekbox{
	display: inline-block;
	vertical-align: middle;
}
.cart-item-view > .cart-checkbox > span{
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	width: 0;
}
.cart-item-view > .cart-img{
	width: 4.8125rem;
	height: 100%;
	text-align: center;
	float: left;
}
.cart-item-view > .cart-img > img{
	width: 4.375rem;
	display: inline-block;
	vertical-align: middle;
}
.cart-item-view > .cart-img > span{
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	width: 0;
}

.cart-item-view > .cart-detail{
	float: left;
}

.cart-item-view > .cart-detail > .goods-detail{
	margin-top: 1.5625rem;
	font-size: 0.875rem;
}
.cart-item-view > .cart-detail > .goods-detail > span:nth-of-type(1){
	color: red;
	margin-right: 0.6875rem;
}
.cart-item-view > .cart-detail > p{
	font-size: 0.625rem;
}
.cart-item-view > .cart-detail  > p:nth-of-type(1){
	line-height: 2.1875rem;
}
</style>
