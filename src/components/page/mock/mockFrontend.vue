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
        this.doDrow()
    },
    methods: {
      getInfo() {
        this.$http.get('/campaign/doMission').then(e => {
          console.log(e)
        })
      },
      doDrow() {
        this.$http.get('/campaign/draw').then(e => {
          console.log(e)
        })
      }
    }
}
</script>
