<template>
	<div id="app" style="">
		<router-view></router-view>
		<BottomNav />	
	</div>
</template>

<script>
import BottomNav from './components/BottomNav.vue';

	export default {
		name: 'App',
		components: {
			BottomNav
		},
		created() {
		}

	}
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