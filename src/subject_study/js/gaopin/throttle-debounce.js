/*
 * @Date: 2020-08-20 15:12:05
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-20 15:44:15
 */
/**
 * @description: throttle节流
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

function throttle(fn, wait) {
    let flag = true
    return function() {
        if (flag) {
            flag = false
            setTimeout(() => {
              fn()
              flag = true
            }, wait)
        }
    }
}
function handle() {
  console.log(123)
}
window.addEventListener('resize', throttle(handle, 1000))

/**
 * @description: bebounce 防抖
 * @param {type}
 * @return {type}
 * @author: PoloHuang
 */

function bebounce(fn, wait) {
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, wait)
    }
}
window.addEventListener('resize', bebounce(handle, 1000))

