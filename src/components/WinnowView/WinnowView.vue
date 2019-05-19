<template>
	<div class="winnow-view">
		<img :src="bigImg" alt="" class="big-img">
		
		<div class="hidden-view">
			<div class="winnow-box" ref='itemsView'>
				<WinnowItemView v-for='item in contents' :item='item'></WinnowItemView>
			</div>
		</div>
	</div>
</template>

<script>
	import WinnowItemView from '../WinnowItemView/WinnowItemView.vue'
	
	export default{
		name: 'winnowView',
		props: ['bigImg', 'contents'],
		components: {
			WinnowItemView
		},
		mounted(){
			// 获取对应 winnow-box 节点，动态设置宽度
			var temp = this.contents.length * (100 + 10)
			
			this.$refs.itemsView.style.width = temp + 'px'
		}
	}
</script>

<style>
	.winnow-view > .big-img{
		width: 100%;
	}
	.winnow-view .hidden-view{
		width: 100%;
		overflow: auto;
	}
	.winnow-view .hidden-view > .winnow-box{
		background: white;
		overflow: hidden;
		padding-left: 0.625rem;
	}
</style>
