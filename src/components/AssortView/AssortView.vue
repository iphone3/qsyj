<template>
	<div class="assort-view">
		<div class="side-view">
			<div class="item" v-for="(item, index) in assortList" :key='index' @click="onNavClick(index)" ref='sideItem'>
				{{item.text}}
			</div>
		</div>
		
		<div class="main-view">
			主体
		</div>
	</div>
</template>

<script>
	export default{
		name:'assortView',
		data() {
			return {
				title: '分类',
				navViewShow: true,
				assortList: null,
				activeIndex: 0,
				selectItem: null
			}
		},
		methods: {
			onNavClick: function(index){
				
				this.activeIndex = index
				
				// 先移出
				this.selectItem.className = 'item'
				// 当前
				this.selectItem = this.$refs.sideItem[this.activeIndex]
				// 添加样式
				this.selectItem.className += ' active'
			}
		},
		created() {
			// 发送标题
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
			
			var that = this 
			this.$ajax.get('/json/assort.json')
				.then(function(response){
					// console.log(response.data)
					that.assortList = response.data
					
					that.$nextTick(function(){
						// 默认选中
						that.selectItem = that.$refs.sideItem[that.activeIndex]
						that.selectItem.className = 'item active'
					})
				})
				.catch(function(err){
					console.log(err)
				})
		},
	}
</script>

<style>
	@import url("../../temp.css");
</style>
