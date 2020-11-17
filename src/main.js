import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//butter配置文件
import '@/plugins/butter'
//dayjs配置文件
import '@/plugins/dayjs'
//element-ui配置文件
import '@/plugins/element-ui'
//highlightjs配置文件
import '@/plugins/highlightjs'
//全局工具文件
import  '@/utils/tool'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')