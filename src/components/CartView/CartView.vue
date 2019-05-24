<template>
	<div class="cart-view">
		<CartItemView v-for="cart in carts" :key="cart.id" :cart='cart'>
		</CartItemView>
	</div>
</template>

<script>
	import CartItemView from '../CartItemView/CartItemView.vue'
	
	export default{
		name:'cartView',
		components:{
				CartItemView
		},
		data() {
			return {
				title: '购物车',
				navViewShow: true,
				carts: null
			}
		},
		created() {
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
			
			var that = this
			
			this.$ajax.get('/json/cart.json')
				.then(function(response){
					// console.log(response.data)
					that.carts = response.data
				})
				.catch(function(err){
					console.log(err)
				})
		}
	}
</script>

<style>
	.cart-view{
		padding-top: 2.8125rem;
	}
</style>
