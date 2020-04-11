<template>
	<transition name="show" @enter="handleEnter" @leave="handleLeave">
		<div class="todo-detail" v-if="selected">
			<app-bar @left="unselectTodo"></app-bar>
			<todo :todo="selected.todo" :active="true" @close="unselectTodo" />
		</div>
	</transition>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import AppBar from './AppBar.vue'
	import Todo from './Todo.vue'

	export default {
		components: {
			AppBar,
			Todo
		},
		computed: {
			...mapState(['selected', 'unselect'])
		},
		methods: {
			...mapMutations(['unselectTodo']),
			handleEnter(el) {
				Object.assign(el.style, {
					top: `${this.selected.rect.top}px`,
					left: `${this.selected.rect.left}px`,
					width: `${this.selected.rect.width}px`,
					height: `${this.selected.rect.height}px`
				})
				setTimeout(() => {
					Object.assign(el.style, {
						top: 0,
						left: 0,
						width: `${this.selected.rect.appWidth}px`,
						height: `${this.selected.rect.appHeight}px`
					})
				}, 0)
			},
			handleLeave(el) {
				Object.assign(el.style, {
					top: 0,
					left: 0,
					width: `${this.unselect.rect.appWidth}px`,
					height: `${this.unselect.rect.appHeight}px`
				})
				setTimeout(() => {
					Object.assign(el.style, {
						top: `${this.unselect.rect.top}px`,
						left: `${this.unselect.rect.left}px`,
						width: `${this.unselect.rect.width}px`,
						height: `${this.unselect.rect.height}px`
					})
				}, 0)
			}
		}
	}
</script>

<style>
	.todo-detail {
		position: fixed;
		display: flex;
		flex-direction: column;
		border-radius: 0;
		background-color: white;
		color: #666;
		will-change: top, left, width, height;
	}

	.todo-detail .todo {
		margin: 0;
		margin-top: -44px;
		padding: 0 20px;
		box-shadow: none;
	}
	
	.todo-detail /deep/ .todo-head,
	.todo-detail /deep/ .todo-body {
		transform: translate3d(0, 88px, 0);
	}

	.todo-detail /deep/ .todo-menu {
		opacity: 0;
	}

	.todo-detail /deep/ .todo-tasks {
		opacity: 1;
		transform: scaleY(1);
	}

	.todo-detail /deep/ .app-bar {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	.show-enter-to,
	.show-leave {
		border-radius: 0;
	}

	.show-enter-to .todo,
	.show-leave .todo {
		padding: 0 20px;
	}

	.show-enter-to /deep/ .todo-head,
	.show-enter-to /deep/ .todo-body,
	.show-leave /deep/ .todo-head,
	.show-leave /deep/ .todo-body {
		transform: translate3d(0, 88px, 0);
	}

	.show-enter-to /deep/ .todo-menu,
	.show-leave /deep/ .todo-menu {
		opacity: 0;
	}

	.show-enter-to /deep/ .todo-tasks,
	.show-leave /deep/ .todo-tasks {
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}

	.show-enter-to /deep/ .app-bar,
	.show-leave /deep/ .app-bar {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	.show-leave-to,
	.show-enter {
		border-radius: 8px;
	}

	.show-leave-to .todo,
	.show-enter .todo {
		padding: 0;
	}

	.show-leave-to /deep/ .todo-head,
	.show-enter /deep/ .todo-head {
		transform: translate3d(0, 0, 0);
	}

	.show-leave-to /deep/ .todo-body,
	.show-enter /deep/ .todo-body {
		transform: translate3d(0, 189px, 0);
	}

	.show-leave-to /deep/ .todo-menu,
	.show-enter /deep/ .todo-menu {
		opacity: 1;
	}

	.show-leave-to /deep/ .todo-tasks,
	.show-enter /deep/ .todo-tasks {
		opacity: 0;
		transform: scale3d(1, 0, 1);
	}

	.show-leave-to /deep/ .app-bar,
	.show-enter /deep/ .app-bar {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}

	.show-enter-active,
	.show-leave-active {
		transition: all 0.5s ease;
	}

	.show-enter-active /deep/ .todo,
	.show-enter-active /deep/ .todo-head,
	.show-enter-active /deep/ .todo-body,
	.show-enter-active /deep/ .todo-menu,
	.show-enter-active /deep/ .todo-tasks,
	.show-enter-active /deep/ .app-bar,
	.show-leave-active /deep/ .todo,
	.show-leave-active /deep/ .todo-head,
	.show-leave-active /deep/ .todo-body,
	.show-leave-active /deep/ .todo-menu,
	.show-leave-active /deep/ .todo-tasks,
	.show-leave-active /deep/ .app-bar {
		transition: all 0.5s ease;
	}
</style>
