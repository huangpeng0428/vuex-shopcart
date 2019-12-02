<template>
  <div class="list">
    <div class="item">
      <div
        class="left-img"
        @click="showMessage">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '点击弹窗'
      }
    },
    methods: {
      showMessage() {
        this.$msgBox.showMsgBox({
          title: '添加分类',
          place: '请输入分类名称',
          confirmBtnText: '确认',
          isShowInput: true
        }).then(val => {      // 可以接收到参数
          console.log(val)
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .item{
    width: 100%;

  }
  .left-img{
    background: #42B983;
    height: 40px;
    line-height: 40px;
    width: 100px;
    margin: 0 auto;
  }
</style>
