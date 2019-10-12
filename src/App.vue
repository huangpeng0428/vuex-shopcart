<template>
  <div id="app">
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
import product from './components/page/product'; // 商品的列表组件
import cart from './components/page/cart'; // 已选商品的组件
import info from './components/page/info'; // 总数量价格的组件

export default {
  name: 'App',
  components: {
    product,
    cart,
    info
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
