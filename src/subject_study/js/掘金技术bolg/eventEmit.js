/*
 * @Date: 2020-07-14 13:38:54
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-27 14:40:17
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
    if (!this._event[eventName]) return false
    console.log(this._event[eventName])
    const len = this._event[eventName].length
    for (let i = 0; i < len; i++) {
      let event = this._event[eventName][i]
      event.fn.apply(this, args)
      if (event.isOnce) {
        this.removeListener(eventName, event.fn)
      }
    }

    // this._event[eventName][fn].apply(this, args)
  }

  removeListener(eventName, fn) {
      console.log(fn)
    if (!this._event[eventName]) return this
    console.log(this._event[eventName])
    this._event[eventName].forEach((item, index) => {
      console.log(item.fn, fn)
      if (item.fn === fn) {
        this._event[eventName].splice(index, 1)
      } else {
        return this
      }
    })
  }

  off(eventName, fn) {
    this.removeListener(eventName, fn)
  }
}

function add(...args) {
  let num = 0
  for (let i = 0; i < args.length; i++) {
    num += args[i]
  }
  console.log(num)
  return num
}

let event = new EventEmitter()

// event.on('test', add)
event.once('test', add)
event.emit('test', 1, 2)
event.emit('test', 1, 2)
