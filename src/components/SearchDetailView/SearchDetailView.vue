<template>
	<div class="search-detail-view">
		<!-- 导航栏 -->
		<van-nav-bar fixed title="搜索详情" left-arrow @click-left="onBack" />
		
		<SearchItemView v-for='(goods, index) in searchDataList' :key='index' :goods='goods'></SearchItemView>
	</div>
</template>

<script>
	import {NavBar} from 'vant';
	import SearchItemView from '../SearchItemView/SearchItemView.vue'
	
	export default{
		name:"searchDetailView",
		props:['searchDataList'],
		components:{
			[NavBar.name]:NavBar,
			SearchItemView
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
		padding-top: 2.8125rem;
		overflow: auto;
	}
</style>
