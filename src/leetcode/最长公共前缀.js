/*
 * @Date: 2019-12-26 11:14:56
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-28 11:34:57
 */
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

/**
 * @param {string[]} 最长公共前缀
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
    if (!strs.length) return ''
    let len = strs.length
    let prev = strs[0]
    for (let i = 0; i < len; i++) {
        let j = 0
        for (; j < strs[i].length; j++) {
            if (strs[i][j] !== prev[j]) break
        }
        prev = prev.substr(0, j)
    }
    return prev
}

let a = longestCommonPrefix(['ac', 'b'])
console.log(a)
