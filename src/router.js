import Vue from 'vue'
import Router from 'vue-router'
//@表示src文件目录
import Index from '@/components/Index' //组件
import Swipe from '@/components/Swipe'
import Coupon from '@/components/Coupon'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
    mode: 'history', //去掉url#
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/swipe',
            name: 'Swipe',
            component: Swipe
        },
        {
            path: '/coupon',
            name: 'Coupon',
            component: Coupon
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        }
    ]
})