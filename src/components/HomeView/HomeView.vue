<template>
	<div class="home-view">
		<!-- 轮播图 -->
		<van-swipe :autoplay="3000" indicator-color="white" class='banner-view'>
			<van-swipe-item v-for='(item,index) in banner' :key="index">
				<!-- <img :src="item.img" alt=""> -->
				<img v-lazy='item.img'>
			</van-swipe-item>
		</van-swipe>
		
		
		<!-- 分类 -->
		<CategoryView></CategoryView>
		
		<!-- 单品热卖 -->
		<TitleView name='单品热卖' icon='star-o'></TitleView>
		
		<!-- 精选活动 -->
		<TitleView name='精选活动' icon='gift-o'></TitleView>
		
		<!-- 为你推荐 -->
		<TitleView name='为你推荐' icon='label-o'></TitleView>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	import CategoryView from '../CategoryView/CategoryView.vue'
	import TitleView from '../TitleView/TitleView.vue'

	export default {
		name: 'homeView',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			CategoryView,
			TitleView
		},
		data() {
			return {
				title: '全视眼镜商城',
				navViewShow: true,
				banner: []
			}
		},
		created() {
			// 发送标题
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)

			// 获取轮播图数据
			// console.log(this)
			
			var that = this
			this.$ajax.get('/json/banner.json')
				.then(function(response) { // 获取数据成功
					// this >> 当前Vue对象
					// console.log(response.data)
					// console.log(this)
					
					that.banner = response.data
				})
				.catch(function(err) { // 出错
					console.log(err)
				})
		}
	}
</script>

<style>
	.home-view {
		padding-top: 2.8125rem;
	}
	
	.home-view > .banner-view{
		height: 9.875rem;
	}
	.home-view > .banner-view img{
		width: 100%;
		height: 100%;
	}
</style>
