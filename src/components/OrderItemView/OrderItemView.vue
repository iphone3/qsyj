<template>
	<div class="order-item-view">
		<div class="order-title">
			<span class="time">{{order.orderTime}}</span>
			<span class="type">{{typeStr}}</span>
		</div>
		
		<div class="order-goods">
			<div class="img">
				<img :src="order.img" alt="">
				<span></span>
			</div>		
			<div class="desc">
				<p>{{order.desc}}</p>
				<span></span>
			</div>
			
			<div class="price">
				<div class="temp">
					<p>￥{{order.price}}</p>
					<p>x{{order.num}}</p>
				</div>
				<span></span>
			</div>
		</div>
		
		<div class="order-other">
			<p>
				<span>共{{order.num}}件 应付金额:</span>
				<span style="color: red;">￥{{order.num * order.price}}</span>
			</p>
			
			<div class="buttons">
				<van-button v-show="logistics" round type="default" size="small">查看物流</van-button>
				<van-button v-show="again" round type="default" size="small">再次购买</van-button>
				<van-button v-show="cancel" round type="default" size="small">取消订单</van-button>
				<van-button v-show="pay" round type="danger" size="small">立即购买</van-button>
				<van-button v-show="prompt" round type="default" size="small">提醒发货</van-button>
				<van-button v-show="confirm" round type="danger" size="small">确认收货</van-button>
			</div> 
			
		</div>
	</div>
</template>

<script>
	import { Button } from 'vant';
	
	export default{
		name:"orderItemView",
		props: ['order'],
		components:{
			[Button.name]:Button
		},
		data() {
			return {
				again: false,	// 再次购买
				logistics: false,	// 查看物流
				cancel: false,	// 取消订单
				pay: false,	// 立即支付
				prompt: false,	// 提醒发货
				confirm: false, // 确认收货
			}
		},
		computed:{
			typeStr: function(){
				if (this.order.type == 1){
					this.pay = true
					this.cancel = true
					return '待付款'
				} else if(this.order.type == 2){
					this.logistics = true
					this.cancel = true
					this.prompt = true
					return '待发货'
				} else if(this.order.type == 3){
					this.cancel = true
					this.confirm = true
					return '待收货'
				} else if(this.order.type == 4){
					this.logistics = true
					this.again = true
					return '交易成功'
				}
			}
		}
	}
</script>

<style>
.order-item-view{
	padding: 1.25rem 0.9375rem;
	background: white;
	margin-top: 0.625rem;
}
.order-item-view > .order-title{
	font-size: 0.625rem;
	transform: scale(0.9);
	line-height: 1.875rem;
	border-bottom: 0.0625rem solid #E8E8E8;
	overflow: hidden;
	font-weight: 600;
}

.order-item-view > .order-title > .time{
	float: left;
}
.order-item-view > .order-title > .type{
	float: right;
}

.order-item-view  > .order-goods{
	border-bottom: 0.0625rem solid #E8E8E8;
	height: 6.625rem;
}

.order-item-view  > .order-goods > .img{
	width: 6.25rem;
	float: left;
	height: 100%;
	text-align: center;
}
.order-item-view  > .order-goods > .img > img{
	width: 5rem;
	display: inline-block;
	vertical-align: middle;
}
.order-item-view  > .order-goods > .img > span{
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	width: 0;
}

.order-item-view  > .order-goods > .desc{
	width: 12.5rem;
	float: left;
	font-size: 0.75rem;
	line-height: 1.1875rem;
	height: 100%;
	font-weight: 600;
}
.order-item-view  > .order-goods > .desc > p{
	display: inline-block;
	vertical-align: middle;
}
.order-item-view  > .order-goods > .desc > span{
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	width: 0;
}

.order-item-view  > .order-goods > .price{
	width: 2.1875rem;
	float: left;
	font-size: 0.75rem;
	line-height: 1.1875rem;
	color: #7d7380;
	height: 100%;
}

.order-item-view  > .order-goods > .price > .temp{
	display: inline-block;
	vertical-align: middle;
	text-align: right;
}
.order-item-view  > .order-goods > .price > span{
	display: inline-block;
	vertical-align: middle;
	height: 100%;
	width: 0;
}


.order-item-view > .order-other{
	text-align: right;
}

.order-item-view > .order-other > p{
	font-size: 0.8125rem;
	color: #7D7380;
	margin: 0.875rem 0 0.8125rem;
}

.order-item-view > .order-other > .buttons > button{
	margin-left: 0.3125rem;
}
</style>
