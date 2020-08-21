const { LinkedList, BinarySearchTree } = require("dsa.js");
/*
 * @Date: 2020-08-18 10:29:18
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-21 11:32:19
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
// var lowestCommonAncestor = function(root, p, q) {
//     let ans;
//     const dfs = (root, p, q) => {
//         if (root === null) return false;
//         const lson = dfs(root.left, p, q);
//         const rson = dfs(root.right, p, q);
//         if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
//             ans = root;
//         } 
//         return lson || rson || (root.val === p.val || root.val === q.val);
//     }
//     dfs(root, p, q);
//     return ans;
// };

// let tree = new BinarySearchTree();
// let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
//   p = 5,
//   q = 1;
// root.map(res => {
//   tree.add(res)
// })
// console.log(lowestCommonAncestor(tree.root, p, q).value)

/**
 * @description: 岛屿数量
 * @param {type} 
 * @return {type} 
 * @author: PoloHuang
 */

 /*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
// function helper(grid, i, j, rows, cols) {
//   if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0")
//     return;

//   grid[i][j] = "0";

//   helper(grid, i + 1, j, rows, cols);
//   helper(grid, i, j + 1, rows, cols);
//   helper(grid, i - 1, j, rows, cols);
//   helper(grid, i, j - 1, rows, cols);
// }

// var numIslands = function(grid) {
//   let res = 0;
//   const rows = grid.length;
//   console.log(rows)
//   if (rows === 0) return 0;
//   const cols = grid[0].length;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "1") {
//         helper(grid, i, j, rows, cols);
//         res++;
//       }
//     }
//   }
//   console.log(res)
//   return res;
// };
// let arr = [
// ['1','1','1','1','0'],
// ['1','1','0','1','0'],
// ['1','1','0','0','0'],
// ['0','0','0','0','0']
// ]
// numIslands(arr);


/**
 * @description: ip地址
 * @param {type} 
 * @return {type} 
 * @author: PoloHuang
 */
const restoreIpAddresses = (s) => { 
  const res = [];

  const dfs = (subRes, start) => {                 // 复原从start开始的子串
    if (subRes.length == 4 && start == s.length) { // 满4段，且用光所有字符
      res.push(subRes.join('.'));                  // 4段拼成字符串 推入结果数组
      return;                                      // 返不返回都行，指针已经到头了，严谨的说还是返回吧
    }
    if (subRes.length == 4 && start < s.length) {  // 满4段，但还没用光字符,直接返回
      return;
    }
    for (let len = 1; len <= 3; len++) {           // 三种长度的选择
      if (start + len - 1 >= s.length) return;     // 指针超出边界了
      if (len != 1 && s[start] == '0') return;     // 不能是0x、0xx

      const str = s.substring(start, start + len); // 当前选择切出的片段
      if (len == 3 && +str > 255) return;          // 不能超过255

      subRes.push(str);                            // 作出选择
      dfs(subRes, start + len);                    // 基于这种选择，向下选择
      subRes.pop();                                // 撤销最后的选择，回到之前的状态
    }
  };

  dfs([], 0);                                      // 按下搜索的启动按钮
  console.log(res)
  return res;
};

restoreIpAddresses('25525511135')