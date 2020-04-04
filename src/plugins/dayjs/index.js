import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'//引入简体中文语言包
import relativeTime from 'dayjs/plugin/relativeTime'//引入relativeTime插件

dayjs.locale('zh-cn')//设置语言
dayjs.extend(relativeTime)//启用relativeTime插件