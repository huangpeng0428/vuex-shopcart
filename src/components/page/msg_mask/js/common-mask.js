import msgboxVue from '../page/MessageBox'

const MessageBox = {}

MessageBox.install = function(Vue, options) {

  const MessageBoxInstance = Vue.extend(msgboxVue)
  let currentMsg
  const initInstance = () => {

    // 实例化vue实例
    currentMsg = new MessageBoxInstance()
    console.log(document)
    console.log(currentMsg.$mount())
    let msgBoxEl = currentMsg.$mount().$el
    document.body.appendChild(msgBoxEl)
  }

    Vue.prototype.$msgBox = {
      showMsgBox(options) {
        if (!currentMsg) {
          initInstance()
        }
        if (typeof options === 'string') {
          currentMsg.content = options
        } else if (typeof options === 'object') {
          Object.assign(currentMsg, options)
        }
        return currentMsg.showBox().then(val => {
          currentMsg = null
          console.log(val)
          return Promise.resolve(val)
        })
        .catch(err => {
          currentMsg = null
          return Promise.reject(err)
        })

      }
    }
  }

// MessageBox.install = function (Vue, options) {
//   const MessageBoxInstance = Vue.extend(msgboxVue)
//   let currentMsg
//   const initInstance = () => {
//     // 实例化vue实例
//     currentMsg = new MessageBoxInstance()
//     let msgBoxEl = currentMsg.$mount().$el
//     document.body.appendChild(msgBoxEl)
//   }
//   // 在Vue的原型上添加实例方法，以全局调用
//   Vue.prototype.$msgBox = {
//     showMsgBox (options) {
//       if (!currentMsg) {
//         initInstance()
//       }
//       console.log(currentMsg)
//       return currentMsg.showBox()

//     }
//   }
// }
export default MessageBox
