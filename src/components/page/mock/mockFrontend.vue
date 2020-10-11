<!--
 * @Date: 2020-06-29 14:50:19
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-27 16:55:19
-->
<template>
  <div>
    <div>1</div>
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.getInfo()

        // this.doDrow()
    },
    methods: {
      getInfo() {

        /// campaign/doMission 开发环境webpack跨域处理
        this.$http.get('/console/mdsp/dynamic/list', {mock: true}).then(e => {
          console.log(e)
        })
      }

      // doDrow() {
      //   this.$http.get('/campaign/draw').then(e => {
      //     console.log(e)
      //   })
      // }
    }
}
</script>
