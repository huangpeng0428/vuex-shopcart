/*
 * @Date: 2020-07-13 10:15:19
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-07-14 09:58:23
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]

// const intersect = (num1, num2) => {
//     let hash = {}
//     for (let i = 0; i < num1.length; i++) {
//       hash[num1[i]] = 1;
//     }

//     for (let i = 0; i < num2.length; i++) {
//       hash[num2[i]] = 2;
//     }

//     const ants = []

//     for(let k in hash) {
//         hash[k] === 2 && ants.push(+k);
//     }

//     console.log(ants)
//     return ants

// }

const intersect = (num1, num2) => {
    let res = []
    if (num1.length < num2.length) [num1, num2] = [num2, num1]
    for (let i = 0; i < num1.length; i++) {
        let key = num2.indexOf(num1[i])
        if (key !== -1) res.push(num2.splice(key, 1))
    }
    console.log(res)
    return res
}
intersect(arr1, arr2)
