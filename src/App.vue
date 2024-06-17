<template>
	<div id="app" style="">
		<router-view></router-view>
		<BottomNav />	
	</div>
</template>

<script>
import BottomNav from './components/BottomNav.vue';
import shouye from './components/shouye.vue';   // 首页
import BackgroundMusic from './components/BackgroundMusic.vue' // 音乐页
	

	export default {
		name: 'App',
		components: {
			BottomNav
		},
		created() {
		}

		
	}

	import Vue from 'vue';
	import App from './App.vue';
	import router from './router'; // 确保路径正确
	

	new Vue({
		router,
		render: h => h(App),
	}).$mount('#App');

	
</script>

<style>
	#app {
		margin:auto;
		border-radius: 15px;
		border: 7px solid black;
		height:1440px;
		width:810px;
	}
</style>