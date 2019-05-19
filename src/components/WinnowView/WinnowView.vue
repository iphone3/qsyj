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
		created(){
			// console.log('Winnow组件创建')
		},
		beforeUpdate(){
			var temp = this.contents.length * (100 + 10)
			this.$refs.itemsView.style.width = temp + 'px'
			// console.log('设置宽度')
		}
		// mounted(){	// 为什么？
		// 	// 获取对应 winnow-box 节点，动态设置宽度
		// 	var temp = this.contents.length * (100 + 10)
		// 	// 必须是DOM节点已经被渲染
		// 	this.$refs.itemsView.style.width = temp + 'px'
		// },
		
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
