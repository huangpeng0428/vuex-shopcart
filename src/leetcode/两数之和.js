/*
 * @Date: 2020-07-30 16:11:27
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-05 17:17:07
 */ 
let nums = [2, 7, 11, 15],
  target = 22;

const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (map[result] !== undefined) return [map[result], i];
    map[nums[i]] = i;
  }
};

console.log(twoSum(nums, target));