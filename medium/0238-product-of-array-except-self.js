/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(prefix);
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};

// Time complexity: O(n)
// Space complexity: O(1) if output array does not count as extra space
// for space complexity analysis
