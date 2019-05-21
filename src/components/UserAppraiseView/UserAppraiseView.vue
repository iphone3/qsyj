<template>
	<div class="user-appraise-view" v-if="appraise">
		<div class="user-desc">
			<div class="user-title">
				<img :src="appraise.userImg" alt="">
				<span>{{appraise.name}}</span>
			</div>
			<div class="user-appraise">
				<span>心得</span>
				{{appraise.content}}
			</div>
		</div>
		
		<div class="user-show">
			<img :src="appraise.showImg" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'userAppraiseView',
		props:['appraise'],
	}
</script>

<style>
	.user-appraise-view{
		width: 17.5rem;
		height: 8.1875rem;
		background: white;
		/* margin-right: 0.625rem; */
		float: left;
		box-shadow: 0px 0px 8px 0px #d0d0d0;
		margin: 0.5rem;
	}
	
	.user-appraise-view > .user-desc{
		float: left;
		width: 9.375rem;
		height: 100%;
		padding: 0.375rem;
		box-sizing: border-box;
	}
	.user-appraise-view > .user-desc > .user-title{
		margin-bottom: 1.125rem;
	}
	.user-appraise-view > .user-desc > .user-title > img{
		width: 1.625rem;
		height: 1.625rem;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 0.625rem;
	}
	.user-appraise-view > .user-desc > .user-title > span{
		font-size: 0.75rem;
		color: #7C7C7C;
		vertical-align: middle;
	}
	.user-appraise-view > .user-desc > .user-appraise{
		font-size: 0.75rem;
		line-height: 1.125rem;
		color: #AAAAAA;
	}
	.user-appraise-view > .user-desc > .user-appraise > span{
		display: inline-block;
		width: 2.625rem;
		height: 0.75rem;
		border: 0.0625rem solid red;
		color: red;
		font-size: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
	}
	
	.user-appraise-view > .user-show{
		width: 8.125rem;
		height: 100%;
		float: left;
	}
	
	.user-appraise-view > .user-show > img{
		width: 100%;
		height: 100%;
	}
</style>
