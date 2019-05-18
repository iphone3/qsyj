<template>
	<div class="home-view">
		<van-swipe :autoplay="3000" indicator-color="white" class='banner-view'>
			<van-swipe-item v-for='item in banner'>
				<!-- <img :src="item.img" alt=""> -->
				<img v-lazy='item.img'>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';

	export default {
		name: 'homeView',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
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
	@import url("../../temp.css");
</style>
