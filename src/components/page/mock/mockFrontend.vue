<!--
 * @Date: 2020-06-29 14:50:19
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-03 16:50:23
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
