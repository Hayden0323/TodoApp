<template>
	<view class="gradient">
		<gradient-color 
		11
			v-for="(todo, index) in todos"
			:key="todo.name"
			:colors="todo.colors"
			:active="index <= currentIndex">
		</gradient-color>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import GradientColor from './GradientColor.vue'
	
	export default {
		components: {
			GradientColor
		},
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['todos', 'currentIndex'])
		}
	}
</script>

<style>
	.gradient {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
</style>
