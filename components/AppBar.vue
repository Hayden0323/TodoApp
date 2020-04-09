<template>
	<view class="app-bar">
		<span class="app-bar-l" @click="$emit('left')">
			<i :class="['fa', `fa-${left}`]"></i>
		</span>
		<h3> {{ title }} </h3>
		<span class="app-bar-r" @click="$emit('right')">
			<i :class="['fa', `fa-${right}`]"></i>
		</span>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			left: {
				type: String,
				default: 'chevron-left'
			},
			right: {
				type: String,
				default: 'ellipsis-v'
			}
		}
	}
</script>

<style>
	.app-bar {
		display: flex;
		align-items: center;
		height: 44px;
		font-size: 15px;
		z-index: 1;
	}
	.app-bar span {
		margin: 0 20px;
	}
	.app-bar h3 {
		display: flex;
		flex: 1;
		justify-content: center;
	}
</style>
