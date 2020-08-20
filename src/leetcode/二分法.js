/*
 * @Date: 2020-08-20 14:51:35
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-20 14:53:38
 */
/**
 * @description: 二分法
 * @param {type} 
 * @return {type} 
 * @author: PoloHuang
 */
let arr = [1, 2, 3, 4, 5],
    target = 5
var findNum = function (arr, target) {
	let left = 0;
	let right = arr.length - 1

	while(left <= right) {
		let middle = Math.floor((right + left) / 2)
		if(arr[middle] === target) {
			return middle
		} else if(arr[middle] < target) {
			left = middle + 1
		} else if(arr[middle] > target) {
			right = middle - 1
		}
	}
	return -1
}
console.log(findNum(arr, target))
