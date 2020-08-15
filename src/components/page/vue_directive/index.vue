<template>
  <div >
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input
      v-focus
      type="text"
      placeholder="我是全局自定义指令">
  </div>
</template>

<script>

// vuex学习
export default {
  name: 'App',
  option: 'vueDirective',
  components: {
  },
  created() {
    console.log(this.$options.option)  // test
  }

}
</script>
