<template>
	<div class="cart-view">
		<CartItemView v-for="(cart, index) in carts" :key="cart.id" :cart='cart' :isChecked='selectList[index]' @onChangeChecked='onItemCheckedChange' :index='index' ref='cartItemView'> 
		</CartItemView>
		
		
		<van-submit-bar
		  :price="totalPrice"
		  button-text="提交订单"
		  @submit="onSubmit"
		>
		  <van-checkbox v-model="isAll" class='all-checkbox' checked-color="red" @change='onAllSelect'>全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import CartItemView from '../CartItemView/CartItemView.vue'
	import { SubmitBar,Checkbox } from 'vant';
	
	export default{
		name:'cartView',
		components:{
				CartItemView,
				[SubmitBar.name]:SubmitBar,
				[Checkbox.name]:Checkbox
		},
		data() {
			return {
				title: '购物车',
				navViewShow: true,
				carts: null,
				isAll: false,
				selectList: []
			}
		},
		methods:{
			onSubmit: function(){
				console.log('提交订单')
			},
			onItemCheckedChange: function(isChecked, index){
				// console.log(isChecked, index)
				// 更新状态数组
				// this.selectList[index] = isChecked
				// console.log(this.selectList)
				
				this.$set(this.selectList, index, isChecked)
			},
			onAllSelect: function(){
				for(var i=0; i<this.selectList.length; i++){
					// this.selectList[i] = this.isAll
					this.$set(this.selectList, i, this.isAll)
					
					// 需要将对应的状态传递到子组件
					this.$refs.cartItemView[i].onItemViewChange(this.isAll)
				}
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
					
					// 动态添加
					for(var i=0; i<that.carts.length; i++){
						that.selectList.push(true)
					}
				})
				.catch(function(err){
					console.log(err)
				})
		},
		computed:{
			totalPrice: function(){
				var total = 0
				
				for(var i=0; i<this.selectList.length; i++){
					if(this.selectList[i]){	// 选中
						var price = this.carts[i].price
						var num = this.carts[i].num
						total += price * num
					}
				}
				
				// 注意显示单位
				return total * 10 * 10
			}
		}
	}
</script>

<style>
.cart-view{
	padding-top: 2.8125rem;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0; 
	padding-bottom: 3.125rem;
	box-sizing: border-box;
}
.cart-view > .van-submit-bar{
	bottom: 3.125rem;
}
.cart-view .all-checkbox{
	margin-left: 0.9375rem;
}
</style>
