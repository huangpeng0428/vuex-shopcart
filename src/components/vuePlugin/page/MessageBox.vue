<template>
  <div
    v-show="isShowMessageBox"
    class="message-box">
    <div
      class="mask"
      @click="cancel"/>
    <div class="message-content">
      <!-- <svg class="icon" aria-hidden="true" @click="cancel">
        <use xlink:href="#icon-delete"></use>
      </svg> -->
      <h3 class="title">{{ title }}</h3>
      <p
        v-if="isShowContent"
        class="content c-999">{{ content }}</p>
      <div>
        <input
          v-if="isShowInput"
          ref="input"
          v-model="inputValue"
          :placeholder="place"
          type="text"
          class="txt"
          @blur="moveDown">
      </div>
      <div class="btn-group flex cm-border cm-border-top lh-50">
        <button
          v-show="isShowCancelBtn"
          class="bn"
          @click="cancel">{{ cancelBtnText }}</button>
        <button
          v-show="isShowConfimrBtn"
          class="btn-primary bn"
          @click="confirm">{{ confirmBtnText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '这是弹框内容'
    },
    place: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line vue/require-default-prop
    isShowInput: false,
    // eslint-disable-next-line vue/require-default-prop
    inputValue: '',
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    // eslint-disable-next-line vue/require-default-prop
    isShowContent: false,
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: '',
      reject: '',
      promise: '' // 保存promise对象
    };
  },
  methods: {
    showBox() {
       this.isShowMessageBox = true
       return new Promise((resolve, reject) => {
         this.resolve = resolve
         this.reject = reject
       })
    },
    cancel() {

    },
    confirm() {
      this.isShowMessageBox = false
      if (this.isShowInput) {
        this.resolve(this.inputValue);
      } else {
        this.resolve('confirm');
      }
      this.remove();
    },
    moveDown() {
      setTimeout(function() {
        document.body.scrollTop = document.body.scrollHeight;
      }, 0);
    },
    remove: function() {
      setTimeout(() => {
        this.destroy();
      }, 300);
    },
    destroy: function() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  }
};
</script>

<style lang='scss' scoped>
.message-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .message-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 74%;
    padding: 20px 20px 70px;
    background: #fff;
    border-radius: 6px;

    .icon {
      position: absolute;
      right: -5px;
      top: -5px;
      width: 20px;
      height: 20px;
      background-size: cover;
    }
    .title {
      text-align: center;
      font-size: 14px;
    }
    .content {
      margin-top: 10px;
    }
    .txt {
      height: 35px;
      box-sizing: border-box;
      padding: 5px 10px;
      line-height: 20px;
      font-size: 14px;
      width: 100%;
      margin-top: 20px;
      background: #f5f5f5;
      border: none;
    }
    .btn-group {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-size: 14px;
      display: flex;
      line-height: 50px;
      height: 50px;
      border-top: 1px solid #f1f1f1;

      &.cm-border.cm-border-top:before {
        background: #f5f5f5;
      }

      .bn {
        width: 50%;
        background: #fff;
        border: none;
        border-radius: 6px;
        outline: none;
      }
      .btn-primary {
        color: #2b61ff;
      }
      &:after {
        position: relative;
        content: '';
        width: 1px;
        height: 22px;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        background: #f1f1f1;
      }
    }

    input {
      -webkit-appearance: none;
      border-radius: 0;
    }
  }
}
</style>
