import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import home from '@/components/page/home';
import product from '@/components/page/product';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
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
        }
    ]
});
