import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//butter配置文件
import '@/lib/butter'
//dayjs配置文件
import '@/lib/dayjs'
//element-ui配置文件
import '@/lib/element-ui'
//highlightjs配置文件
import '@/lib/highlightjs'
//全局工具文件
import  '@/utils/tool'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')