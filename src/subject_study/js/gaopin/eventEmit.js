/*
 * @Date: 2020-08-31 16:26:05
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-31 17:13:26
 */
class EventEmitter {
  constructor() {
    this._event = Object.create(null)
  }
  on(eventName, fn, isOnce = false) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function!')
    }
    if (!this._event[eventName]) {
      this._event[eventName] = []
    }
    this._event[eventName].push({ fn, isOnce })
  }
  once(eventName, fn) {
    this.on(eventName, fn, true)
  }
  emit(eventName, ...args) {
    if (this._event[eventName]) {
      this._event[eventName].forEach((element, index) => {
        element.fn(...args)
        if (element.isOnce) {
          this._event[eventName].splice(index, 1)
        }
      })
    }
  }
  off(eventName, fn) {
      let eventIndex = this._event[eventName].findIndex(e => e.fn === fn)
      this._event[eventName].splice(eventIndex, 1)
    }
}
let event = new EventEmitter()
const add = (...args) => {
    let sum = args.reduce((prev, item) => {
        prev += item
        return prev
    }, 0)
    console.log(sum)
}

event.on('test', add)

// event.once('test', add)
event.emit('test', 1, 2)
event.off('test', add)
event.emit('test', 1, 5)
