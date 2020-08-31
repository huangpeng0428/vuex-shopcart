
class Compiler {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)

        // 把当前节点中的元素放到内存中
        let fragment = this.node2fragment(this.el)

        this.vm = vm

        // 编译模板 用数据编译
        this.compile(fragment)

        this.el.appendChild(fragment)
    }

    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    // 编译元素的方法
    compileElement(node) {
        let attributes = node.attributes; // 类数组
        [...attributes].forEach(attr => {
            let {name, value: expr} = attr
            if (this.isDirective(name)) {
                console.log(name.split('-'))
                let [, directive] = name.split('-')
                console.log(directive)
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
        return node.nodeType === 1
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
                 console.log(data[current])
                 return data[current]
            }
            return data[current]
        }, vm.$data)
    },

    // 解析v-model指令
    model(node, expr, vm) {
        let fn = this.updater['modelUpdater']
        node.addEventListener('input', e => {
            let value = e.target.value
            this.setVal(vm, expr, value)
        })
        let value = this.getVal(vm, expr)
        console.log(value)
        fn(node, value)
    },
    html() {

    },
    text(node, expr, vm) {
        let fn = this.updater['textUpdater']
        console.log(expr)
        let content = expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
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
            new Compiler(this.$el, this)
        }
    }
}
