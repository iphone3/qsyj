<template>
	<div class="category-view">
		<dl>
			<dt style="background: red;"></dt>
			<dd>框架</dd>
		</dl>
		<dl>
			<dt style="background: blue;"></dt>
			<dd>框架</dd>
		</dl>
		<dl>
			<dt style="background: blueviolet;"></dt>
			<dd>框架</dd>
		</dl>
		<dl>
			<dt style="background: skyblue;"></dt>
			<dd>框架</dd>
		</dl>
		<dl>
			<dt style="background: lightblue;"></dt>
			<dd>框架</dd>
		</dl>
	</div>
</template>

<script>
	export default{
		name:'categoryView',
	}
</script>

<style>
	.category-view{
		background: white;
		overflow: hidden;
	}
	.category-view > dl{
		width: 20%;
		height: 5.3125rem;
		float: left;
		text-align: center;
		padding: 0.6875rem 0 0;
		
		
		box-sizing: border-box;
	}
	.category-view > dl > dt{
		width: 2.5rem;
		height: 2.5rem;
		display: inline-block;
		border-radius: 50%;
		margin-bottom: 7px;
	}
	.category-view > dl{
		font-size: 13px;
	}
</style>
