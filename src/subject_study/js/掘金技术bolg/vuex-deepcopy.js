/*
 * @Date: 2020-07-15 10:10:17
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-10 16:06:31
 */
function deepCopy(obj, cache = []) {

  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)

  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}

  const sym = Object.getOwnPropertySymbols(obj)
  
  if (sym.length) {
    sym.forEach(res => {
      if (typeof obj[res] === "obj") {
        copy[res] = deepCopy(obj[res], cache);
      } else {
        copy[res] = obj[res];
      }
    });
  }

  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

let sym1 = Symbol("s")
const obj = {
  b: 1,
  c: {
    a: /a/,
    d: new Date("2020")
  },
  [sym1]: "test123"
}

obj.d = obj

console.log(deepCopy(obj))

// deepCopy(obj)
