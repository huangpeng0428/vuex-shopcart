const { LinkedList} = require("dsa.js");
/*
 * @Date: 2020-08-18 10:29:18
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-20 14:55:57
 */
// var minArray = function(numbers) {
//     let len = numbers.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - i; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//           let prev = numbers[j];
//           numbers[j] = numbers[j + 1];
//           numbers[j + 1] = prev;
//         }
//       }
//     }
//     return numbers
// };

/**
 * @param {number[]} numbers
 * @return {number}
 */
// let arr = [3, 4, 5, 1, 2];
// var minArray = function(numbers) {
//     let left=0,
//         right=numbers.length-1;
//     while(left <= right){
//         // 二分法
//         const temp=Math.floor((right+left)/2)
//           if (numbers[temp] == numbers[right]) {
//             right--;
//           } else if (numbers[temp] > numbers[right]) {
//             left = temp + 1;
//           } else if (numbers[temp] < numbers[right]) {
//             right = temp;
//           }
//     }
//     return numbers[left]
// };
// const a = minArray(arr);
// console.log(a)

// let l1 = '1->2->4';
// let l2 = '1->3->4';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null){
//         return l2;
//     }
//     if(l2 === null){
//         return l1;
//     }
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };
// mergeTwoLists(l1, l2);
// var li = new LinkedList();
// console.log(li)
// console.log(1)

/**
 * @description: 二叉树最近的公共祖先
 * @param {type} 
 * @return {type} 
 * @author: PoloHuang
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        } 
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;
lowestCommonAncestor(root, p, q);