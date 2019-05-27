<template>
	<div class="mine-item-view" @click="onMineItemClick">
		<van-icon class='icon' :name="icon" />
		<p class="name">{{name}}</p>
		<p class="other">{{other}}</p>
	</div>
</template>

<script>
	import { Icon } from 'vant';
	export default{
		name:'mineItemView',
		props:['icon', 'name', 'other', 'type'],
		components:{
			[Icon.name]:Icon
		},
		methods:{
			onMineItemClick: function(){
				this.$emit('onOrderItemClick', this.type)
			}
		}
	}
</script>

<style>
	.mine-item-view{
		text-align: center;
		padding: 0.8125rem;
		line-height: 1.5625rem;
	}
	.mine-item-view > .icon{
		color: red;
	}
	.mine-item-view > .name{
		font-size: 0.75rem;
		color: #5c5c5c;
		margin: 0;
		line-height: 1.125rem;
	}
	.mine-item-view > .other{
		font-size: 0.875rem;
		transform: scale(0.6);
		color: #c5c5c5;
	}
</style>
