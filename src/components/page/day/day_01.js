/*
 * @Date: 2020-05-14 17:07:56
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-14 18:41:32
 */
const deepCopy = (obj, cache = []) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0];
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};

  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};
let a = {
  d: 2,
  b: {c: 1}
}
console.log(deepCopy(a));
