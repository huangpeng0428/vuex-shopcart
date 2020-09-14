/*
 * @Date: 2020-09-14 17:46:11
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-14 17:46:31
 */
    function reversal(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            let temp = arr[i]
            arr[i] = arr[arr.length - i - 1]
            arr[arr.length - i - 1] = temp
        }
    }
    let array = [1, 2, 3, 4, 5, 6]
    reversal(array)
    console.log(array)
