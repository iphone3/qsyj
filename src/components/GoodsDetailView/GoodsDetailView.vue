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
	import UserAppraiseView from '../UserAppraiseView/UserAppraiseView.vue'

	export default {
		name: 'goodsDetailView',
		components: {
			[NavBar.name]: NavBar,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Stepper.name]: Stepper,
			[Icon.name]: Icon,
			UserAppraiseView
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
		beforeUpdate() {
			// vm.$nextTick 确保DOM已经渲染完成之后，再去做一些事情
			this.$nextTick(function(){
				// this.$refs.userAppraise[0] 组件
				// vm.$el 组件中的 根DOM元素
				console.log(this.$refs.userAppraise)
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
	@import url("../../temp.css");
</style>
