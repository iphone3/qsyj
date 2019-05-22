<template>
	<div class="search-detail-view">
		<!-- 导航栏 -->
		<van-nav-bar fixed title="搜索详情" left-arrow @click-left="onBack" />
	</div>
</template>

<script>
	import {NavBar} from 'vant';
	
	export default{
		name:"searchDetailView",
		components:{
			[NavBar.name]:NavBar
		},
		methods:{
			onBack: function(){
				this.$emit('onBack')
			}
		}
	}
</script>

<style>
	.search-detail-view{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		background: #F2F2F2;
		z-index: 999;
	}
</style>
