
// eslint-disable-next-line no-unused-vars
class Dep {
    constructor() {
        this.subs = []      // 添加watcher
    }

    // 订阅
    addSub(watcher) {
        this.subs.push(watcher)
    }

    // 发布
    notify() {
        this.subs.forEach(watcher => watcher.update())
    }
}
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb

        this.oldValue = this.get()
    }
    get() {
        Dep.target = this
        console.log(2222)
        let value = CompileUtil.getVal(this.vm, this.expr)
        Dep.target = null
        return value
    }
    update() {
        let newVal = CompileUtil.getVal(this.vm, this.expr)
        if (newVal !== this.oldValue) {
            this.cb(newVal)
        }
    }
}

/*
*实现数据劫持
*/

class Observer {
  constructor(data) {
      console.log(1111)
    this.observe(data)
  }
  observe(data) {
    if (data && typeof data == 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }
  defineReactive(obj, key, value) {
      this.observe(value)
      let dep = new Dep()
      Object.defineProperty(obj, key, {
          get() {
              console.log(3333)

            //   console.log('Dep.target', Dep.target)
              Dep.target && dep.addSub(Dep.target)
              return value
          },
           set: (newVal) => {
            if (newVal !== value) {
                this.observe(newVal)
                value = newVal
                dep.notify()
            }
           }
      })
  }
}

class Compiler {
    constructor(el, vm) {

        this.el = this.isElementNode(el) ? el : document.querySelector(el)

        // 把当前节点中的元素放到内存中
        let fragment = this.node2fragment(this.el)

        this.vm = vm

        // console.log(fragment)

        // 编译模板 用数据编译
        this.compile(fragment)

        // console.log(this.el)
        this.el.appendChild(fragment)
    }

    isDirective(attrName) {
        return attrName.indexOf('v-') !== -1
    }

    // 编译元素的方法
    compileElement(node) {
        let attributes = node.attributes; // 类数组
        [...attributes].forEach(attr => {
            let {name, value: expr} = attr
            if (this.isDirective(name)) {

                // console.log(name.split('-'))
                let [, directive] = name.split('-')
                CompileUtil[directive](node, expr, this.vm)
            }
        })
    }

    // 编译文本 找{{}}
    compileText(node) {
        let content = node.textContent
        if (/\{\{(.+?)\}\}/g.test(content)) {

        CompileUtil['text'](node, content, this.vm)
        }
    }

    // 核心编译方法
    compile(node) {
        let childNodes = node.childNodes;

        // console.log([...childNodes]);

        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {

                // console.log('element', child)
                this.compileElement(child)

                // 如果是元素的话，需要除去自己，再去遍历子节点
                this.compile(child)
            } else {

                // console.log('text', child)
                this.compileText(child)
            }
        })
    }
    node2fragment(node) {
        let fragment = document.createDocumentFragment()
        let firstChild
        // eslint-disable-next-line no-cond-assign
        while (firstChild = node.firstChild) {

            // appendChild具有移动性
            // console.log(firstChild)
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    isElementNode(node) {
        return node.nodeType === 1          // 元素
    }
}

const CompileUtil = {

  // 根据表达式取对应的数据
  getVal(vm, expr) {
    return expr.split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },

  // 根据表达式设置对应的数据
  setVal(vm, expr, value) {
    expr.split('.').reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        data[current] = value

        //  console.log(data[current])
        return data[current]
      }
      return data[current]
    }, vm.$data)
  },

  getContentVal(vm, expr) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(vm, args[1])
    })
  },

  // 解析v-model指令
  model(node, expr, vm) {
    let fn = this.updater['modelUpdater']
    new Watcher(vm, expr, newVal => {  // 给输入框加一个观察者，稍后数据更新，触发此方法，用新值给输入框赋值
      fn(node, newVal)
    })
    node.addEventListener('input', e => {
      let value = e.target.value
      this.setVal(vm, expr, value)
    })
    let value = this.getVal(vm, expr)
    console.log(value)
    fn(node, value)
  },

  html() {},

  text(node, expr, vm) {
    let fn = this.updater['textUpdater']
    console.log(expr)
    let content = expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
      new Watcher(vm, args[1], () => {
        fn(node, this.getContentVal(vm, expr))
      })
      return this.getVal(vm, args[1])
    })
    fn(node, content)
  },

  updater: {
    modelUpdater(node, value) {
      node.value = value
    },
    textUpdater(node, value) {
      node.textContent = value
    },
    htmlUpdater(node, value) {
      node.innerHTML = value
    }
  }
}

// eslint-disable-next-line no-unused-vars
class Vue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.data
        if (this.$el) {
            new Observer(this.$data)
            new Compiler(this.$el, this)
        }
    }
}

/**
 * @description: mvvm整体流程
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

// 1.首先对数据进行observer数据劫持，利用Object.defineProperty给每个属性加上get(),set()
// 2.之后会进行数据的解析，解析数据时(比如v-model时)给每条数据加上watcher，并将watcher对象赋值给Dep.target（发布订阅器target属性）数据解析渲染时触发get()，将watcher添加订阅
// 3.当修改数据时，会触发set(), 此时会触发我们在set()中定义的dep.notify方法，循环更新watcher updata方法，形成数据驱动视图，mvvm模式
