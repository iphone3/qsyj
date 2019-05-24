<template>
	<div class="cart-view">
		<CartItemView v-for="(cart, index) in carts" :key="cart.id" :cart='cart' :isChecked='selectList[index]' @onChangeChecked='onItemCheckedChange' :index='index' ref='cartItemView'> 
		</CartItemView>
		
		<!-- 地址选择 -->
		<van-popup v-model="isSubmit" position="bottom">
			<SelectAddrView :addList='addList' @onEditAddr='onEditAddr'></SelectAddrView>
		</van-popup>
		
		<!-- 地址编辑 -->
		<van-popup v-model="isEdit" position="bottom">
			<EditAddrView :editValue='editValue' @onSaveAddr='onSaveAddr'></EditAddrView>
		</van-popup>
		
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
	import { SubmitBar,Checkbox,Popup } from 'vant';
	import SelectAddrView from '../SelectAddrView/SelectAddrView.vue'
	import EditAddrView from '../EditAddrView/EditAddrView.vue'
	
	export default{
		name:'cartView',
		components:{
				CartItemView,
				[SubmitBar.name]:SubmitBar,
				[Checkbox.name]:Checkbox,
				SelectAddrView,
				[Popup.name]:Popup,
				EditAddrView
		},
		data() {
			return {
				title: '购物车',
				navViewShow: true,
				carts: null,
				isAll: true,
				selectList: [],
				isSubmit: false,
				addList: [],
				isEdit: false,
				editValue: {},
				editIndex: -1
			}
		},
		methods:{
			onSubmit: function(){
				console.log('提交订单')
				this.isSubmit = true
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
			},
			onEditAddr: function(index){
				this.isEdit = true
				this.editValue = this.addList[index]
				this.editIndex = index
			},
			onSaveAddr: function(addr){
				// console.log(addr)
				
				// 更新
				this.$set(this.addList, this.editIndex, addr)
				// 隐藏
				this.isEdit = false
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
				
			this.$ajax.get('/json/user-addr.json')
				.then(function(response){
					// console.log(response.data)
					that.addList = response.data
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
	@import url("../../temp.css");
</style>
