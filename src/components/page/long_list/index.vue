<template>
  <div
    ref="list"
    class="infinite-list-container"
    @scroll="scrollEvent($event)">
    <div
      :style="{ height: listHeight + 'px' }"
      class="infinite-list-phantom"/>
    <div
      :style="{ transform: getTransform }"
      class="infinite-list">
      <div
        v-for="item in visibleData"
        ref="items"
        :key="item.id"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
        class="infinite-list-item"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

    // 每项高度
    itemSize: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {

      // 可视区域高度
      screenHeight: 0,

      // 偏移量
      startOffset: 0,

      // 起始索引
      start: 0,

      // 结束索引
      end: null,

      listData: []
    }
  },
  computed: {

    // 列表总高度
    listHeight() {
      return this.listData.length * this.itemSize
    },

    // 可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize)
    },

    // 偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`
    },

    // 获取真实显示列表数据
    visibleData() {
      return this.listData.slice(this.start, Math.min(this.end, this.listData.length))
    }
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
        this.listData.push({ id: i, value: i })
    }
    this.screenHeight = this.$el.clientHeight

    // console.log(this.screenHeight)
    this.start = 0
    this.end = this.start + this.visibleCount

    // console.log(this.end)
  },
  methods: {
    scrollEvent() {

      // 当前滚动位置
      let scrollTop = this.$refs.list.scrollTop

      // 此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize)

      // 此时的结束索引
      this.end = this.start + this.visibleCount

      // 此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
      console.log(scrollTop, this.itemSize)
    }
  }
}
</script>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
