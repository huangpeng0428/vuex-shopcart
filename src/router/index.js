/*
 * @Date: 2019-05-22 12:25:09
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-22 10:22:34
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/vuex_car/home'                     // vuex购物车demo
import product from '@/components/page/vuex_car/product'               // vuex购物车demo
import filters from '@/components/page/filter_demo/filters'             // vue 过滤
import MsgContent from '@/components/page/msg_mask/page/MsgContent'     // vue弹窗插件
import longList from '@/components/page/long_list/list'         // 长列表优化
import longIndex from '@/components/page/long_list/index'         // 长列表优化
// import sliderList from '@/components/page/sliderList/index'     // 轮播
// import mockPage from '@/components/page/mock/mockFrontend'      // mock模拟数据
// import vueDirective from '@/components/page/vue_directive'      // mock模拟数据

const vueDirective = () => import(/* webpackChunkName: "vueDirective" */'@/components/page/vue_directive')
const mockPage = () => import('@/components/page/mock/mockFrontend')

// const Foo = () =>
//   Promise.resolve({

//     /* 组件定义对象 */
//   })

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
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
      path: '/longIndex',
      name: 'longIndex',
      component: longIndex
    },
    {
      path: '/sliderList',
      name: 'sliderList',
      component: resolve =>
        require(['@/components/page/sliderList/index'], resolve)
    },
    {
      path: '/mockPage',
      name: 'mockPage',
      component: mockPage
    },
    {
      path: '/vueDirective',
      name: 'vueDirective',
      component: vueDirective
    }
  ]
})
