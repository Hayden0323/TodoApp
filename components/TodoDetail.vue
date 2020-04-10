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

	.todo-detail .todo-head,
	.todo-detail .todo-body {
		transform: translate3d(0, 88px, 0);
	}

	.todo-detail .todo-menu {
		opacity: 0
	}

	.todo-detail .todo-tasks {
		opacity: 1;
		transform: scaleY(1);
	}

	.todo-detail .todo-bar {
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

	.show-enter-to .todo-head,
	.show-enter-to .todo-body,
	.show-leave .todo-head,
	.show-leave .todo-body {
		ransform: translate3d(0, 88px, 0);
	}

	.show-enter-to .todo-menu,
	.show-leave .todo-menu {
		opacity: 0;
	}

	.show-enter-to .todo-tasks,
	.show-leave .todo-tasks {
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}

	.show-enter-to .todo-bar,
	.show-leave .todo-bar {
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

	.show-leave-to .todo-head,
	.show-enter .todo-head {
		transform: translate3d(0, 0, 0);
	}

	.show-leave-to .todo-body,
	.show-enter .todo-body {
		transform: translate3d(0, 189px, 0);
	}

	.show-leave-to .todo-menu,
	.show-enter .todo-menu {
		opacity: 1;
	}

	.show-leave-to .todo-tasks,
	.show-enter .todo-tasks {
		opacity: 0;
		transform: scale3d(1, 0, 1);
	}

	.show-leave-to .todo-bar,
	.show-enter .todo-bar {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}

	.show-enter-active,
	.show-leave-active {
		transition: all 0.5s ease;
	}

	.show-enter-active .todo,
	.show-enter-active .todo-head,
	.show-enter-active .todo-body,
	.show-enter-active .todo-menu,
	.show-enter-active .todo-tasks,
	.show-enter-active .todo-app-bar,
	.show-leave-active .todo,
	.show-leave-active .todo-head,
	.show-leave-active .todo-body,
	.show-leave-active .todo-menu,
	.show-leave-active .todo-tasks,
	.show-leave-active .todo-app-bar {
		transition: all 0.5s ease;
	}
</style>
