const state = {
    collects: [],
    count: 1
}
const getters = {
    renderCollects(state) { // 承载变化的collects
        return state.collects
    }
}
const mutations = {
    pushCollects(state, items) { // 如何变化collects,插入items
        state.collects.push(items)
    }
}
const actions = {
    invokePushItems(context, item) {
        context.commit('pushCollects', item)
    }
}
export default {
    namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
