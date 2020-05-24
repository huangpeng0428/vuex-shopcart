<template>
  <div>
    <div style="height: 40px; overflow: hidden;">
      <div
        ref="animationCont"
        style="height: 200px"
        class="data-title">
        <div
          v-for="(item, index) in list"
          :key="index"
          style="height: 40px; line-height: 40px; text-align: center;">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['111', '222', '333', '444', '555', '111']
    }
  },
  mounted() {

    let domObj = this.$refs['animationCont']

    // console.log()
    let i = 0
    // eslint-disable-next-line no-unused-vars
    let domTimer = setInterval(() => {
      i++
      domObj.style.transform = `translateY(${-40 * i}px)`;
      domObj.style.transition = '1s';
      if (i == 5) {
        console.log(i)
        setTimeout(() => {
          i = 0
          domObj.style.transform = `translateY(0)`;
          domObj.style.transition = '0s';
        }, 2800)
      }
    }, 3000)

  }
}
</script>
<style scoped>
.data-title{
  transform: translateY(0);
  transition: 1s;
}
</style>
