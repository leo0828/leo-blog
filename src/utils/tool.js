import Vue from 'vue'
import dayjs from 'dayjs'

const fromNow = (date) => dayjs(date).fromNow()

Vue.prototype.$day = {
    fromNow: fromNow
}