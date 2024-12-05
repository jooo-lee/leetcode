/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    // Do not 'fix' the same number more than once
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;

        // Prevent duplicate triplets
        while (l < r && nums[l] == nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return res;
};

// Time complexity: O(n^2)
// Space complexity: O(1), O(logn) or O(n) - depending on JavaScript engine implementation of Array.prototype.sort()
// and assuming output array space is not counted.
// This Stack Overflow answer has a more in depth proof of the space complexity
// being O(n^2) if we count the output array as space.
// https://stackoverflow.com/questions/57641003/what-is-the-time-and-space-complexity-of-the-3sum-problem-with-the-following-alg
