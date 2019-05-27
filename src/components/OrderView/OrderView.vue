<template>
	<div class="order-view">
		<van-nav-bar
		  title="订单详情"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		
		<van-tabs v-model="active">
		  <van-tab title="全部">内容 1</van-tab>
		  <van-tab title="待付款">内容 2</van-tab>
		  <van-tab title="待发货">内容 3</van-tab>
		  <van-tab title="待收货">内容 4</van-tab>
		  <van-tab title="交易成功">内容 4</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import { NavBar,Tab, Tabs } from 'vant';
	export default{
		name:"orderView",
		props:['orderType'],
		components:{
			[NavBar.name]:NavBar,
			[Tab.name]:Tab,
			[Tabs.name]:Tabs,
		},
		created() {
			// 数据类型 对应 tab选项卡
			this.active = this.orderType
		},
		data() {
			return {
			  active: 2
			};
		},
		methods:{
			onClickLeft: function(){
				this.$emit('onBack')
			}
		}
	}
</script>

<style>
	.order-view{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		background: #F2F2F2;
		z-index: 99;
	}
</style>
