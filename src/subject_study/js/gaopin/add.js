// 只是单纯的数据add 类似fn(1,2)(2) === 5 并不是函数柯理化
function currying(...args) {
    let res = args.reduce((prev, item) => (prev + item), 0)
    let ret = function(...args) {
        res = args.reduce((prev, item) => (prev + item), res)
        return ret
    }
    ret.toString = function() {
        return res
    }
    ret.valueOf = function() {
        return res
    }
    return ret
}

let a = currying(2, 3)(2)
console.log(a)

// 函数柯理化解释
// https://www.jianshu.com/p/2975c25e4d71
