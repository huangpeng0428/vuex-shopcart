import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/page/vuex_car/home';
import product from '@/components/page/vuex_car/product';
import filters from '@/components/page/filter_demo/filters'
import MsgContent from '@/components/page/msg_mask/page/MsgContent'

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
        }
    ]
});
