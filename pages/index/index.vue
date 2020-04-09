<template>
	<view class="home">
		<app-bar left="bars" right="search" title="TODO"></app-bar>
		<avatar></avatar>
		<gradient></gradient>
	</view>
</template>

<script>
	import AppBar from '../../components/AppBar.vue'
	import Avatar from '../../components/Avatar.vue'
	import Gradient from '../../components/Gradient.vue'
	
	export default {
		components: {
			AppBar,
			Avatar,
			Gradient
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.home {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: white;
	}
</style>
