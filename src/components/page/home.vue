<template>
  <div >
    <section class="joinState">
      <!-- <div class="joinStateHead">
        <span class="h3">全国改性料通讯录</span>
        <span
          class="joinStatus"
          @click="invokePushItems(item)">加入收藏列</span>
      </div> -->
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BookDetail',
  data() {
    return {
      msg: '',
      item: {
         id: '01',
         productName: '苹果',
         price: '1.6元/斤'
       }
    }
  },
  computed: {
      ...mapGetters('collection', ['renderCollects'])
  },
  watch: {
      renderCollects: {
          handler: function(val, oldval) {
          console.log(val)
        },
        deep: true// 对象内部的属性监听，也叫深度监听
      }
  },
  mounted() {
  },
  methods: {
      ...mapActions('collection', [ // collection是指modules文件夹下的collection.js
          'invokePushItems'  // collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ])
  }

}
</script>
