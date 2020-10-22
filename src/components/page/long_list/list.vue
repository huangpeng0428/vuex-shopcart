<!--
 * @Date: 2019-12-27 10:56:11
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-22 10:12:55
-->
<template>
  <div>
    <button @click="add">增加</button>
    <div
      ref="container"
      class="container">
      <div
        :style="style"
        class="scroll-wrapper">
        <div
          v-for="(item, index) in scrollList"
          :key="index"
          class="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>

    // 长列表优化
    export default {
        data() {
            return {
                list: [
                    '测试数据'
                ],
                start: 0,
                end: 60,
                paddingTop: 0,
				paddingBottom: 0
            }
        },
        computed: {
            scrollList() {
                return this.list.slice(this.start, this.end)
            },
            style() {
                return {
                    paddingTop: this.paddingTop + 'px',
                    paddingBottom: this.paddingBottom + 'px'
                }
            }
        },
         watch: {
                list(val) {
                    const valLen = val.length
                    this.allHeight = valLen * 30
                    this.paddingBottom = this.allHeight - this.scrollList.length * 30
                    console.log(this.paddingBottom)
                }
            },
        mounted() {
            const container = this.$refs.container
            container.addEventListener('scroll', () => {
                const top = container.scrollTop
                this.start = Math.floor(top)
                this.end = this.start + 60

                this.paddingTop = top
                if (this.end >= this.list.length - 1) {
                    this.paddingBottom = 0
                    return
                }
                this.paddingBottom = this.allHeight - 600 - top
            })
        },
        methods: {
            add() {
                let arr = new Array(600).fill(0)
                arr = arr.map((e, i) => {
                    return i
                })
                this.list = [
                    ...this.list,
                    ...arr
                ]
            }
        }
    }
</script>
<style>
.container {
	width: 300px;
	height: 600px;
	overflow: auto;
	border: 1px solid;
	margin: 100px auto;
}
.item {
	height: 29px;
	line-height: 30px;
	border-bottom: 1px solid #aaa;
	padding-left: 20px;
}
</style>
