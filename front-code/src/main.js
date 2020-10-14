// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ViewUI from 'view-design'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'view-design/dist/styles/iview.css'
import Login from './view/login.vue'
import Register from './view/register.vue'
import Fundtrade from './view/panels/fundtrade.vue'
import Recommendedcombination from './view/panels/recommendedcombination.vue'
import Aboutfunds from './view/panels/aboutfunds.vue'
import Userpanel from './view/userdata/Userpanel.vue'
import Pictures from './view/mainPage/components/pictures.vue'
import Testpage from './view/testpage.vue'
import Funddetails from './view/panels/funddetails.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ViewUI)
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 定义路由
const routes = [
  { path: '/login', component: Login },
  { path: '/fundtrade', component: Fundtrade },
  { path: '/recommendedcombination', component: Recommendedcombination },
  { path: '/aboutfunds', component: Aboutfunds },
  { path: '/register', component: Register },
  { path: '/userpanel', component: Userpanel },
  { path: '/', component: Pictures },
  { path: '/testpage', component: Testpage },
  { path: '/funddetails', component: Funddetails }
]
// 创建router实例，然后传routes配置
const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
