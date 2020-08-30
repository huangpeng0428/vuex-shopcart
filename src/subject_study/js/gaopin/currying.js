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
