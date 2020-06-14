import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/page/vuex_car/home';                     // vuex购物车demo
import product from '@/components/page/vuex_car/product';               // vuex购物车demo
import filters from '@/components/page/filter_demo/filters'             // vue 过滤
import MsgContent from '@/components/page/msg_mask/page/MsgContent'     // vue弹窗插件
import longList from '@/components/page/long_list/list'         // 长列表优化
import sliderList from '@/components/page/sliderList/index'     // 轮播
import mockPage from '@/components/page/mock/mockFrontend'      // mock模拟数据

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/product',
            name: 'product',
            component: product
        },
        {
            path: '/filters',
            name: 'filters',
            component: filters
        },
        {
            path: '/MsgContent',
            name: 'MsgContent',
            component: MsgContent
        },
        {
            path: '/longList',
            name: 'longList',
            component: longList
        },
        {
            path: '/sliderList',
            name: 'sliderList',
            component: sliderList
        },
        {
            path: '/mockPage',
            name: 'mockPage',
            component: mockPage
        }
    ]
});
