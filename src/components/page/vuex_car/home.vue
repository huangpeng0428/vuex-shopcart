<template>
  <div >
    <h3>Vuex购物车demo</h3>
    <!-- 商品的列表 -->
    <product/>
    <!-- 购物车的列表 -->
    <cart/>
    <!-- 总数量价格 -->
    <info/>
  </div>
</template>

<script>
import product from './product'; // 商品的列表组件
import cart from './cart'; // 已选商品的组件
import info from './info'; // 总数量价格的组件

// vuex学习
export default {
  name: 'App',
  components: {
    product,
    cart,
    info
  }

}
</script>
