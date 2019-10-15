// state 初始化
const state = {
    shoplist: [
        {
            id: 11,
            name: '鱼香肉丝',
            price: 12
        },
        {
            id: 22,
            name: '宫保鸡丁',
            price: 14
        },
        {
            id: 34,
            name: '土豆丝',
            price: 10
        },
        {
            id: 47,
            name: '米饭',
            price: 2
        }
    ],
    cartlist: []
};

const getters = {

    retrunShoplist: state => state.shoplist,

    returnCartlist: state => {
        return state.cartlist.map(({id, num}) => {
            let productItem = state.shoplist.find(e => e.id == id)
            return {
                ...productItem,
                num
            }
        })
    },

    returntotalNum: (state, getters) => {
        let totalNum = 0
        getters.returnCartlist.forEach(e => {
            totalNum += e.num
        })
        return totalNum
    },

    returntotalPrice: (state, getters) => {
        let totalPrice = 0
        getters.returnCartlist.forEach(e => {
            totalPrice += e.price * e.num
        })
        return totalPrice
    }
};

const actions = {
    actionscartList(context, {id}) {
        context.commit('pushcartList', id);
    },
    actionsEmptyCartList(context) {
        context.commit('emptycartList');
    },
    delProduct(context, {id}) {
        context.commit('delcartList', id);
    },
    addProduct(context, {id}) {
        context.commit('addcartList', id);
    },
    reduceProduct(context, { id }) {
        context.commit('reducecartList', id);
    }
};
const mutations = {

    // 添加进购物车
    pushcartList(state, id) {
        let record = state.cartlist.find(e => e.id == id)

        if (record) {
            record.num ++
        } else {
            state.cartlist.push({
                id,
                num: 1
            })
        }
    },

    // 删除购物车某件商品
    delcartList(state, id) {
        state.cartlist = state.cartlist.filter(e => e.id != id)
    },

    // 清空购物车
    emptycartList(state, getters) {
        state.cartlist = []
    },

    // 新增一件商品
    addcartList(state, id) {
        let record = state.cartlist.find(e => e.id == id)
            record.num++
    },

    // 减少一件商品
    reducecartList(state, id) {
        let record = state.cartlist.find(e => e.id == id)
        if (record.num > 1) {
            record.num--
        } else {
            state.cartlist = state.cartlist.filter(e => e.id != id)
        }
    }
};

export default {
    namespaced: true, // 用于在全局引用此文里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
};
