<template>
	<div class="assort-view">
		<div class="side-view">
			<div class="item" v-for="(item, index) in assortList" :key='index' @click="onNavClick(index)" ref='sideItem'>
				{{item.text}}
			</div>
		</div>
		
		<div class="main-view">
			<div class="main-wrapper">
				<div class="goods-wrapper" v-for="(item, index) in goodsList" :key='index'>
					<div class="img">
						<img :src="item.img" alt="">
						<!-- 垂直居中设置参考 -->
						<span></span>
					</div>
					
					<div class="content">
						<p class="name">{{item.name}}</p>
						<p class="old-price">原价: ￥{{item.oldPrice}}</p>
						<p class="price">折扣价: ￥{{item.price}}</p>
					</div>
				</div>
			</div>
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
				selectItem: null,
				goodsList: null
			}
		},
		methods: {
			onNavClick: function(index){
				
				this.activeIndex = index
				this.goodsList = this.assortList[index].children
				
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
						that.goodsList = that.assortList[that.activeIndex].children
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
.assort-view{
	background: #F2F2F2;
	padding-top: 2.8125rem;
	padding-bottom: 3.125rem;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
}

.assort-view > .side-view{
	height: 100%;
	background: white;
	width: 5.9375rem;
	/* background: red; */
	float: left;
	padding: 0.9375rem;
	box-sizing: border-box;
}

.assort-view > .side-view > .item{
	color: black;
	font-size: 0.75rem;
	height: 1.625rem;
	line-height: 1.625rem;
	border-radius: 0.75rem;
	text-align: center;
	margin-bottom: 0.9375rem;
}

.assort-view > .side-view > .active{
	background: black;
	color: white;
}

.assort-view > .main-view{
	width: 16.25rem;
	height: 100%;
	float: left;
	padding: 0.625rem;
	overflow: auto;
}
.assort-view > .main-view > .main-wrapper{
	width: 100%;
	padding-bottom: 0.625rem;
}

.assort-view > .main-view > .main-wrapper > .goods-wrapper{
	background: white;
	height: 6.25rem;
	margin-bottom: 0.625rem;
	box-sizing: border-box;
	border-radius: 0.3125rem;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img{
	width: 5.625rem;
	float: left;
	height: 100%;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img > img{
	width: 100%;
	vertical-align: middle;
	display: inline-block;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img > span{
	vertical-align: middle;
	display: inline-block;
	height: 100%;
	width: 0;
}

.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content{
	width: 9.6875rem;
	float: left;
	margin-top: 0.8125rem;
}

.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content > .name{
	font-size: 0.75rem;
	line-height: 1.0625rem;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content > .old-price{
	font-size: 0.75rem;
	line-height: 2.0625rem;
	text-decoration: line-through;
	color: #BBBBBB;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content > .price{
	font-size: 0.6875rem;
	color: red;
}
</style>
