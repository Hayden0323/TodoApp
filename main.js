import Vue from 'vue'
import App from './App'
import store from './store.js'

import './static/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
