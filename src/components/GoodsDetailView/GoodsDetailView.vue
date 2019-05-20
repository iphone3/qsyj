<template>
	<div class="goods-detail-view">
		<!-- 导航栏 -->
		<van-nav-bar title="商品详情" left-arrow @click-left="onBack" />

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
	</div>
</template>

<script>
	import {
		NavBar,
		Swipe,
		SwipeItem,
		Stepper,
		Icon
	} from 'vant';

	export default {
		name: 'goodsDetailView',
		components: {
			[NavBar.name]: NavBar,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Stepper.name]: Stepper,
			[Icon.name]: Icon
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
			}
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
	@import url("../../temp.css");
</style>
