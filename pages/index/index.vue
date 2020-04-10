<template>
	<view class="home">
		<app-bar left="bars" right="search" title="TODO"></app-bar>
		<avatar></avatar>
		<gradient></gradient>
		<todo-list></todo-list>
		<todo-detail></todo-detail>
	</view>
</template>

<script>
	import AppBar from '../../components/AppBar.vue'
	import Avatar from '../../components/Avatar.vue'
	import Gradient from '../../components/Gradient.vue'
	import TodoList from '../../components/TodoList.vue'
	import TodoDetail from '../../components/TodoDetail.vue'
	
	export default {
		components: {
			AppBar,
			Avatar,
			Gradient,
			TodoList,
			TodoDetail
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
		color: white;
	}
</style>
