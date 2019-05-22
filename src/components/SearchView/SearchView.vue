<template>
	<div class="search-view">
		<van-search
		  v-model="searchKey"
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		  @search="onSearch"
		>
		  <div slot="action" @click="onSearch">搜索</div>
		</van-search>
		
		<div class="history-view">
			<div class="history-title">
				<h4>最近搜索</h4>
				<span @click="onClear">清空记录</span>
			</div>
			
			<van-tag round v-for="(item, index) in historyList">{{item}}</van-tag>
		</div>
	</div>
</template>

<script>
	import { Search,Tag } from 'vant';
	
	export default{
		name:'searchView',
		components:{
			[Search.name]:Search,
			[Tag.name]:Tag
		},
		data() {
			return {
				title: '搜索',
				navViewShow: false,
				searchKey: '',
				historyList:[
					'明月',
					'海昌',
					'隐形眼镜'
				]
			}
		},
		created() {
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		},
		methods:{
			onSearch: function(){
				console.log('搜索')
			},
			onClear: function(){
				console.log('清空')
			}
		}
		
	}
</script>

<style>
	@import url("../../temp.css");
</style>
