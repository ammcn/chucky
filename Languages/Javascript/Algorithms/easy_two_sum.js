/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let response = []
  nums.every((currentNum, index) => {
      let remainder = target - currentNum
      let remainderIndex = nums.findIndex(checkRemainderIndex)

      if (remainderIndex === index) return true

      function checkRemainderIndex(checking) {
          return checking === remainder
      }

      if (remainderIndex >= 0) {
          response = [index, remainderIndex]
          return false
      }
      
      return true
  })
  return response
};
// Runtime 897 ms


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
// Runtime 123 ms