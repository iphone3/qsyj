<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<!-- 使用组件 -->
		<NavView></NavView>
  </div>
</template>

<script>
	// 第一步: 导入组件
	import NavView from './components/NavView.vue'
	
export default {
  name: 'app',
  components: {
		// 第二步: 注册组件
		NavView,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
