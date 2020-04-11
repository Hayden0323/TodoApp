<template>
	<div class="todo" :class="{todo_selected: selected}">
		<div class="todo-head" @click="handleClick">
			<div class="todo-icon" :style={color}>
				<i :class="['fa', `fa-${todo.icon}`]"></i>
			</div>
			<div class="todo-menu"><i class="fa fa-ellipsis-v"></i></div>
		</div>
		<div class="todo-body">
			<p class="todo-tips">{{ todo.tasks.length }} Tasks</p>
			<h3 class="todo-title">{{ todo.name }}</h3>
			<div class="todo-progress">
				<span class="todo-progress-line">
					<i :style="{ width: progress, backgroundImage: progressColor }"></i>
				</span>
				<span class="todo-progress-num">{{ progress }}</span>
			</div>
			<div class="todo-tasks">
				<h4 class="todo-subtitle" v-if="todayTasks.length">Today</h4>
				<ul>
					<li v-for="task in todayTasks" :key="task.id">
						<task :todo="todo" :task="task" />
					</li>
				</ul>
				<h4 class="todo-subtitle" v-if="tomorrowTasks.length">Tomorrow</h4>
				<ul>
					<li v-for="task in tomorrowTasks" :key="task.id">
						<task :todo="todo" :task="task" />
					</li>
				</ul>
				<h4 class="todo-subtitle" v-if="outdatedTasks.length">Outdated</h4>
				<ul>
					<li v-for="task in outdatedTasks" :key="task.id">
						<task :todo="todo" :task="task" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Task from './Task.vue'
	import {
		today,
		tomorrow
	} from '../shared'
	export default {
		components: {
			Task
		},
		props: {
			todo: {
				type: Object,
				required: true
			},
			selected: {
				type: Boolean
			}
		},
		computed: {
			color() {
				return this.todo.colors[0]
			},
			progress() {
				const totalCount = this.todo.tasks.filter(t => !t.deleted).length
				const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length
				return `${Math.round((doneCount / totalCount) * 100)}%`
			},
			progressColor() {
				const colorLeft = `${this.todo.colors[0]} 30%`
				const colorRight = `${this.todo.colors[1]}`
				return `linear-gradient(to right, ${colorLeft}, ${colorRight})`
			},
			todayTasks() {
				return this.todo.tasks.filter(task => {
					return task.date >= today && task.date < tomorrow
				})
			},
			tomorrowTasks() {
				return this.todo.tasks.filter(task => {
					return task.date >= tomorrow
				})
			},
			outdatedTasks() {
				return this.todo.tasks.filter(task => {
					return task.date < today
				})
			},
		},
		methods: {
			handleClick() {
				const appRect = document.querySelector('body').getBoundingClientRect()
				const elRect = this.$el.getBoundingClientRect()
				const todo = this.todo
				const rect = {}
				rect.top = elRect.top - appRect.top
				rect.left = elRect.left - appRect.left
				rect.width = elRect.width
				rect.height = elRect.height
				rect.appWidth = appRect.width
				rect.appHeight = appRect.height
				this.$emit('select', {
					rect,
					todo
				})
			}
		}
	}
</script>

<style>
	.todo {
		flex: 1;
		margin: 0 8px;
		overflow: hidden;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
		color: #666;
	}

	.todo_selected {
		visibility: hidden;
	}

	.todo-head {
		display: flex;
		padding: 20px;
		height: 44px;
		justify-content: space-between;
		align-items: flex-start;
		transform: translate3d(0, 0, 0);
		will-change: transform;
	}

	.todo-body {
		padding: 0 20px;
		transform: translate3d(0, 189px, 0);
		will-change: transform;
	}

	.todo-icon {
		display: flex;
		width: 44px;
		height: 44px;
		border: 1px solid #eee;
		border-radius: 100%;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	.todo-menu {
		color: #eee;
	}

	.todo-tips {
		opacity: 0.6;
		font-size: 13px;
		font-weight: 600;
	}

	.todo-title {
		margin-top: 6px;
		font-size: 32px;
	}

	.todo-progress {
		display: flex;
		align-items: center;
		margin-top: 30px;
	}

	.todo-progress-line {
		margin-right: 10px;
		flex: 1;
		height: 3px;
		background-color: #eee;
	}

	.todo-progress-line i {
		display: block;
		height: 100%;
		transition: all 0.3s ease;
	}

	.todo-progress-num {
		font-size: 12px;
	}

	.todo-tasks {
		opacity: 0;
		transform: scale3d(1, 0, 1);
		/* transform-origin: top; */
		/* will-change: transform opacity; */
	}

	.todo-subtitle {
		margin-top: 32px;
		margin-bottom: 8px;
		color: #999;
	}
</style>
