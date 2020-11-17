import Vue from 'vue';
import {
    Button,
    Message,
    Loading,
    infiniteScroll,
    Link
} from 'element-ui';

Vue.use(Button)
Vue.use(Loading)
Vue.use(Link)
Vue.use(infiniteScroll)
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;