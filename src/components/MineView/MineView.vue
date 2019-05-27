<template>
	<div class="mine-view">
		<!-- 头部信息 -->
		<div class="user-view">
			<div class="content-wrapper">
				<div class="user-msg">
					<img src="http://www.api.qsyj.com/img/atom.png" alt="">
					<p>请叫我阿童木</p>
				</div>
			
				<van-row>
				  <van-col span="6">
					  <dl>
						  <dt>3</dt>
						  <dd>收藏</dd>
					  </dl>
				  </van-col>
				  <van-col span="6">
					  <dl>
						  <dt>2</dt>
						  <dd>关注</dd>
					  </dl>
				  </van-col>
				  <van-col span="6">
					  <dl>
						  <dt>22</dt>
						  <dd>足迹</dd>
					  </dl>
				  </van-col>
				  <van-col span="6">
					  <dl style="border: 0;">
						  <dt>33</dt>
						  <dd>心得</dd>
					  </dl>
				  </van-col>
				</van-row>
			</div>
		</div>
	
		<!-- 订单信息 -->
		<div class="item-wrapper">
			<div class="title-wrapper">
				<h4>我的订单</h4>
				<a href="#">
					查看全部
					<van-icon name="arrow" />
				</a>
			</div>
			
			<van-row>
				<van-col span='6'>
					<MineItemView icon='shop' name='待付款'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='shop-collect' name='待发货'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='underway' name='待收货'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='alipay' name='退款退货'></MineItemView>
				</van-col>
			</van-row>
		</div>
		
		<!-- 服务信息 -->
		<div class="item-wrapper">
			<div class="title-wrapper">
				<h4>我的服务</h4>
				<a href="#">
					查看全部
					<van-icon name="arrow" />
				</a>
			</div>
			
			<van-row style='border-bottom: 0.0625rem solid #dedede;'>
				<van-col span='6'>
					<MineItemView icon='youzan-shield' name='邀请好友' other='立赚30元'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='bell' name='签到赢礼包' other='10豆'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='printer' name='优惠券' other='3张'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='audio' name='限时购'></MineItemView>
				</van-col>
			</van-row>
			
			<van-row style='border-bottom: 0.0625rem solid #dedede;'>
				<van-col span='6'>
					<MineItemView icon='comment' name='我的收藏' other='10个'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='gift' name='收获地址' other='2个'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='question' name='客户中心'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='todo-list' name='充值中心'></MineItemView>
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span='6'>
					<MineItemView icon='manager' name='我的回答'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='label' name='领劵中心'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='service' name='验光单' other='3张'></MineItemView>
				</van-col>
				<van-col span='6'>
					<MineItemView icon='chat' name='试用中心' other='1元试用'></MineItemView>
				</van-col>
			</van-row>
		</div>
	
		<!-- 退出 -->
		<div class="logout">
			<a href="#">退出</a>
		</div>
	</div>
</template>

<script>
	import { Row, Col,Icon } from 'vant';
	import MineItemView from '../MineItemView/MineItemView.vue'
	
	export default{
		name:'mineView',
		components:{
			[Row.name]:Row,
			[Col.name]:Col,
			MineItemView,
			[Icon.name]:Icon
		},
		data() {
			return {
				title: '我的',
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
	@import url("../../temp.css");
</style>
