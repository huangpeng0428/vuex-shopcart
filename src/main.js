// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MessageBox from './components/page/msg_mask/js/common-mask'
import http from './lib/http'

Vue.config.productionTip = false
Vue.use(MessageBox)
Vue.prototype.$http = http

Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
