<template>
  <div>
    <h4>已选商品</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(shop,index) in cartProducts"
          :key="index">
          <td>{{ shop.id }}</td>
          <td>{{ shop.name }}</td>
          <td>{{ shop.price }}</td>
          <td>{{ shop.num }}</td>
          <!-- <td>
            <div
              class="btn btn-danger btn-sm"
              @click="delProduct(shop)">删除</div>
          </td> -->
          <td>
            <div style="display: flex; justify-content: center;">
              <div
                style="width: 30px;"
                @click="addProduct(shop)">+</div>
              <div
                style="width: 30px;"
                @click="reduceProduct(shop)">-</div>
            </div>
          </td>
        </tr>
        <tr v-if="!cartProducts.length">
          <td
            colspan="5"
            class="text-center">您的购物车空空如也。。。</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  computed: {
      ...mapGetters('cart', {'cartProducts': 'returnCartlist'})
  },
  watch: {
      cartProducts: {
          handler(val) {
              console.log(val)
          }
      }
  },
  mounted() {
  },
  methods: {

    //   ...mapActions('cart', ['delProduct'])
      ...mapActions('cart', ['addProduct']),
      ...mapActions('cart', ['reduceProduct'])
  }
}
</script>
