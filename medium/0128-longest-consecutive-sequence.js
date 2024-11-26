/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let longest = 0;
  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let currLen = 0;
      while (set.has(num + currLen)) {
        currLen++;
      }
      longest = Math.max(longest, currLen);
    }
  });

  return longest;
};

// Time complexity: O(n)
// Space complexity: O(n)
