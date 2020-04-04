import Vue from 'vue'
import dayjs from 'dayjs'

const fromNow = (date) => dayjs(date).fromNow()
const getDateStr = (date) => dayjs(date).format('YYYY/MM/DD')

Vue.prototype.$dateTool = {
    fromNow: fromNow,
    getDateStr:getDateStr
}