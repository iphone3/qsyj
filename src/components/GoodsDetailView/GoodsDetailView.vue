<template>
	<div class="goods-detail-view" v-if="goodsDetail">
		<!-- 导航栏 -->
		<van-nav-bar fixed title="商品详情" left-arrow @click-left="onBack" />

		<!-- 轮播图 -->
		<van-swipe :autoplay="3000" class='banner'>
			<van-swipe-item v-for="(item, index) in goodsDetail.banners" :key="index">
				<img v-lazy="item.img" />
			</van-swipe-item>
		</van-swipe>
	
		<!-- 主体内容 -->
		<div class="content-view">
			<!-- 价格 -->
			<div class="price-view">
				<p class="new-price">￥{{goodsDetail.newPrice}}</p>
				<p class="old-price">原价￥{{goodsDetail.oldPrice}}</p>
				<span class="sale-item" v-if="goodsDetail.sale">特价</span>
			</div>
			
			<!-- 规格 -->
			<div class="standard-view">
				<div class="items">
					<div v-for="(item,index) in goodsDetail.standardImages" :key="index">
						<img :src="item.img" :alt="item.color">
					</div>
				</div>
				
				<div class="side">
					<select name="eyes">
						<option value="左眼">左眼</option>
						<option value="右眼">右眼</option>
					</select>
					
					<select name="degree">
						<option v-for="(item,index) in goodsDetail.degree" :value="item" :key='index'>{{item}}</option>
					</select>
				</div>
				
				<van-stepper v-model="number" />
			</div>
			
			<!-- 描述 -->
			<div class="desc-view">
				<div class="title">
					<span>自营</span>
					<p>{{goodsDetail.name}}</p>
				</div>
				<p class="desc">
					{{goodsDetail.desc}}
				</p>
			</div>
			
			<!-- 说明 -->
			<div class="explain-view">
				<span>说明</span>
				<p>{{goodsDetail.explain}}</p>
				<van-icon name="arrow" class='icon' />
			</div>
		</div>
	
		<!-- 商品评价 -->
		<div class="appraise-view">
			<div class="appraise-title">
				<span class="title">
					商品评价({{goodsDetail.appraise.num}})
				</span>
				<span class="rate-score">
					好评{{goodsDetail.appraise.rateScore}}%
					<van-icon class='icon' name="arrow"></van-icon>
				</span>
			</div>
			
			<div class="appraise-content">
				<div class="box" ref='scollView'>
					<UserAppraiseView ref='userAppraise' v-for='(item, index) in goodsDetail.appraise.list' :key='index' :appraise='item'></UserAppraiseView>
				</div>
			</div>
		</div>
	
		<!-- 产品信息 -->
		<div class="product-view">
			<h3>图文详情</h3>
			<h4>产品信息</h4>
			<table>
				<tr v-for="(item, index) in goodsDetail.productMessage" :key='index'>
					<td>{{item.key}}</td>
					<td>{{item.value}}</td>
				</tr>
			</table>
		</div>
		
		<!-- 产品印花 -->
		<div class="product-view">
			<h3>产品印花</h3>
			<div class="product-border" v-for="(item, index) in goodsDetail.productStamp" :key='index'>
				<h4>{{item.stamp}}</h4>
				<p>{{item.text}}</p>
				<img :src="item.img" alt="">
			</div>
		</div>
		
		<!-- 商品导购 -->
		<van-goods-action>
		  <van-goods-action-mini-btn
			icon="like-o"
			text="收藏"
			@click="onCollect"
		  />
		  <van-goods-action-mini-btn
			icon="cart"
			text="购物车"
			@click="onCart"
		  />
		  <van-goods-action-big-btn
			text="加入购物车"
			@click="onAddCart"
		  />
		  <van-goods-action-big-btn
			primary
			text="立即购买"
			@click="onBuy"
		  />
		</van-goods-action>
	</div>
</template>

<script>
	import {
		NavBar,
		Swipe,
		SwipeItem,
		Stepper,
		Icon,
		GoodsAction,
		GoodsActionBigBtn,
		GoodsActionMiniBtn
	} from 'vant';
	import UserAppraiseView from '../UserAppraiseView/UserAppraiseView.vue'

	export default {
		name: 'goodsDetailView',
		components: {
			[NavBar.name]: NavBar,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Stepper.name]: Stepper,
			[Icon.name]: Icon,
			UserAppraiseView,
			[GoodsAction.name]: GoodsAction,
			[GoodsActionBigBtn.name]: GoodsActionBigBtn,
			[GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
		},
		data() {
			return {
				goodsDetail: null,
				number: 0
			}
		},
		methods: {
			onBack: function() {
				this.$store.commit('changeGoodsDetailShow')
			},
			onCollect: function(){
				console.log('收藏')
			},
			onCart: function(){
				console.log('跳转到购物车')
			},
			onAddCart: function(){
				console.log('添加到购物车')
			},
			onBuy: function(){
				console.log('立即购买')
			}
		},
		beforeUpdate() {
			// vm.$nextTick 确保DOM已经渲染完成之后，再去做一些事情
			this.$nextTick(function(){
				// this.$refs.userAppraise[0] 组件
				// vm.$el 组件中的 根DOM元素
				var userAppraise = this.$refs.userAppraise[0].$el 
				
				// 元素宽度
				var width = userAppraise.offsetWidth
				
				// element.style 内联样式
				// getComputedStyle 包括内联样式、嵌入样式、外部样式
				var computedStyle = getComputedStyle(userAppraise, null)
				
				// 右间距
				var marginR = parseInt(computedStyle.marginRight)
				
				// 动态计算
				var temp = this.goodsDetail.appraise.list.length * (width + marginR * 2) + 'px'
				this.$refs.scollView.style.width = temp
			})
		},
		created() {
			// 根据goodsID获取对应数据
			console.log(this.$store.state.goodsItemId)

			var that = this
			this.$ajax.get('/json/goods-detail.json')
				.then(function(response) {
					// console.log(response)

					that.goodsDetail = response.data
				})
				.catch(function(err) {
					console.log(err)
				})
		}
	}
</script>

<style>
.goods-detail-view {
	background: blue;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 99;
	background: #f2f2f2;
	overflow: auto;
	padding-top: 2.8125rem;
	padding-bottom: 3.125rem;
}

.goods-detail-view>.banner img {
	width: 100%;
}


.goods-detail-view > .content-view{
	background: white;
	border: 0.0625rem #bbbbbb solid;
	border-left: 0;
	border-right: 0;
	margin-bottom: 0.625rem;
}
.goods-detail-view > .content-view > .price-view{
	height: 2.8125rem;
	line-height: 2.8125rem;
}
.goods-detail-view > .content-view > .price-view > .new-price{
	float: left;
	font-size: 1.3125rem;
	font-weight: 900;
	margin-right: 1.25rem;
	margin-left: 1.25rem;
	color: red;
}
.goods-detail-view > .content-view > .price-view > .old-price{
	font-size: 0.75rem;
	color: #7c7c7c;
	float: left; 
	margin-right: 1.25rem;
	text-decoration: line-through;
}
.goods-detail-view > .content-view > .price-view > .sale-item{
	display: inline-block;
	font-size: 0.75rem;
	color: white;
	background: red;
	width: 1.875rem;
	height: 1.125rem;
	line-height: 1.125rem;
	text-align: center;
}


.goods-detail-view > .content-view > .standard-view{
	overflow: hidden;
}
.goods-detail-view > .content-view > .standard-view > .items{
	margin-left: 0.9375rem;
	float: left;
	overflow: hidden;
	width: 14.0625rem;
}
.goods-detail-view > .content-view > .standard-view > .items img{
	width: 3.875rem;
	height: 3.875rem;
	float: left;
	margin-right: 0.625rem;
	border: 0.0625rem solid black;
}

.goods-detail-view > .content-view > .standard-view > .side{
	overflow: hidden;
	margin-bottom: 1.3125rem;
}

.goods-detail-view > .content-view > .standard-view > .side select{
	background: white;
	color: black;
	float: left;
	border-radius: 0.3125rem;
	margin-right: 0.625rem;
}

.goods-detail-view > .content-view > .standard-view > .van-stepper{
	
}

.goods-detail-view > .content-view > .standard-view > .van-stepper >.van-stepper__minus,
.goods-detail-view > .content-view > .standard-view > .van-stepper >.van-stepper__plus{
	background: white;
	border: 0.0625rem solid #BBBBBB;
	border-radius: 0.3125rem;
}

.goods-detail-view > .content-view > .standard-view > .van-stepper >.van-stepper__input{
	width: 3.75rem;
	border: 0.0625rem solid #BBBBBB;
	background: white;
	box-sizing: border-box;
}



.goods-detail-view > .content-view > .desc-view{
	margin-top: 0.9375rem;
	padding: 0 1.25rem;
}

.goods-detail-view > .content-view > .desc-view > .title{
	overflow: hidden;
	margin-bottom: 0.9375rem;
}

.goods-detail-view > .content-view > .desc-view > .title > span{
		background: white;
		border: 0.0625rem solid red;
		color: red;
		float: left;
		margin-right: 0.8125rem;
		font-size: 0.75rem;
}

.goods-detail-view > .content-view > .desc-view > .title > p{
	float: left;
}

.goods-detail-view > .content-view > .desc-view > .desc{
	font-size: 0.75rem;
	line-height: 1.0625rem;
	color: #7c7c7c;
	border-bottom: 0.0625rem solid #e8e8e8;
	padding-bottom: 0.625rem;
}


.goods-detail-view > .content-view > .explain-view{
	padding: 0 1.75rem 0 1.4375rem;
	height: 2.5rem;
	line-height: 2.5rem;
	overflow: hidden;
	font-size: 0.75rem;
}
.goods-detail-view > .content-view > .explain-view > span{
	color: black;
	font-weight: 800;
	margin-right: 1.4375rem;
	float: left;
}
.goods-detail-view > .content-view > .explain-view > p{
	color: #7C7C7C;
	float: left;
}
.goods-detail-view > .content-view > .explain-view > .icon{
	float: right;
	color: #7C7C7C;
	height: 2.5rem;
	line-height: 2.5rem;
}


.goods-detail-view > .appraise-view{
	background: white;
	margin-bottom: 0.625rem;
}
.goods-detail-view > .appraise-view > .appraise-title{
	padding: 0.8125rem 1.5625rem 0.8125rem 1.25rem;
}

.goods-detail-view > .appraise-view > .appraise-title > .title{
	font-size: 0.875rem;
	font-weight: 800;
}
.goods-detail-view > .appraise-view > .appraise-title > .rate-score{
	color: red;
	font-size: 0.875rem;
	float: right;
	vertical-align: middle;
}
.goods-detail-view > .appraise-view > .appraise-title > .rate-score > .icon{
	color: #7C7C7C;
	vertical-align: middle;
}


.goods-detail-view > .appraise-view > .appraise-content{
	overflow: auto;
	padding-left: 0.9375rem;
	padding-bottom: 0.625rem;
	margin-bottom: 0.625rem;
}

.goods-detail-view > .appraise-view > .appraise-content > .box{
	overflow: hidden;
}


.goods-detail-view > .product-view{
	padding: 0.9375rem 0.625rem;
	background: white;
	margin-bottom: 0.625rem;
}

.goods-detail-view > .product-view > h3{
	background: black;
	color: white;
	border-radius: 0.3125rem;
	text-align: center;
	height: 1.875rem;
	line-height: 1.875rem;
	font-size: 0.875rem;
}
.goods-detail-view > .product-view h4{
	line-height: 4.125rem;
	font-size: 1rem;
	font-weight: 900;
}

.goods-detail-view > .product-view > table{
	border: 0.0625rem solid #bbbbbb;
	border-collapse: collapse;
	font-size: 0.75rem;
	width: 100%;
}
.goods-detail-view > .product-view > table td{
	border: 0.0625rem solid #bbbbbb;
	height: 2.375rem;
	padding-left: 1.0625rem;
	line-height: 2.375rem;
}
.goods-detail-view > .product-view > table td:nth-of-type(1){
	width: 5.4375rem;
	color: #707070;
}

.goods-detail-view > .product-view > .product-border{
	border-bottom: 0.0625rem solid #BBBBBB;
}
.goods-detail-view > .product-view > .product-border > p{
	font-size: 0.8125rem;
	line-height: 1.0625rem;
}
.goods-detail-view > .product-view > .product-border > img{
	width: 100%;
}


.goods-detail-view .van-button--warning{
	background: black;
	border-color: black;
}
.goods-detail-view .van-button--danger{
	background: red;
}
</style>
