/*
 * @Date: 2019-10-10 10:22:14
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-25 14:45:29
 */
import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        footerStatus,
        collection,
        cart
    }
})
