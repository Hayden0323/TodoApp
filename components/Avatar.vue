<template>
	<view class="avatar" :class="{ avatar_selected : !!selected }">
		<div class="avatar-face">
			<img src="../static/jobs.jpeg">
		</div>
		<h2 class="avatar-name">Hello, Jane.</h2>
		<p class="avatar-tips">
			Looks like feed good.<br /> You have {{ todayTasks.length }} tasks to do today
		</p>
		<p class="avatar-date"> TODAY : {{ today | dataString }} </p>
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	export default {
		data () {
			return {
				today: new Date()
			}
		},
		computed: {
			...mapState(['selected']),
			...mapGetters(['todayTasks'])
		},
		filters: {
			dataString (val) {
				return val.toDateString().toUpperCase().replace(/(\s\d{4})$/, ', $1')
			}
		}
	}
</script>

<style>
	.avatar {
		display: felx;
		padding: 0 40px;
		height: 300px;
		justify-content: flex-end;
		flex-direction: column;
		transition: all .5s ease;
	}
	.avatar_selected {
		transform: translate3d(0, 20px, 0);
		opacity: 0;
	}
	.avatar-face {
		width: 44px;
		height: 44px;
		border-radius: 100%;
		overflow: hidden;
		box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
	}
	.avatar-face img {
		display: block;
		width: 100%;
		height: 100%
	}
	.avatar-name {
		margin-top: 32px;
		padding: 0 6px;
		font-size: 32px;
		letter-spacing: 1px;
		font-weight: 300
	}
	.avatar-tips {
		margin-top: 16px;
		padding: 0 6px;
		font-size: 13px;
		font-weight: 100;
		opacity: 0.8;
		line-height: 1.6em;
	}
	.avatar-date {
		margin-top: 44px;
		margin-bottom: 16px;
		padding: 0 6px;
		font-size: 14px;
	}
</style>
