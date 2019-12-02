import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/page/home';
import product from '@/components/page/product';
import filters from '@/components/page/filter_demo/filters'
import list from '@/components/vuePlugin/page/list'

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
            path: '/list',
            name: 'list',
            component: list
        }
    ]
});
