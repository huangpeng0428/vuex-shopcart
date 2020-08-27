/*
 * @Date: 2020-01-08 10:09:48
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-27 17:23:08
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let arr = []
    let len = s.length
    if (len % 2) return false
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch (letter) {
          case '(': {
            arr.push(letter)
            break
          }
          case '{': {
            arr.push(letter)
            break
          }
          case '[': {
            arr.push(letter)
            break
          }
          case ')': {
            if (arr.pop() !== '(') return false
            break
          }
          case '}': {
            if (arr.pop() !== '{') return false
            break
          }
          case ']': {
            if (arr.pop() !== '[') return false
            break
          }
        }
    }
    return !arr.length
}

console.log(isValid('{[([]{})]}'))
