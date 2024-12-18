/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxWater = 0;
  let l = 0;
  let r = height.length - 1;
  let maxL = height[l];
  let maxR = height[r];

  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxWater += Math.max(0, Math.min(maxL, maxR) - height[l]);
      maxL = Math.max(maxL, height[l]);
    } else {
      r--;
      maxWater += Math.max(0, Math.min(maxL, maxR) - height[r]);
      maxR = Math.max(maxR, height[r]);
    }
  }
  return maxWater;
};

// Time complexity: O(n)
// Space complexity: O(1)

// -------------------------- O(n) memory solution --------------------------
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxWater = 0;
  const maxLeft = [];
  const maxRight = [];

  // Populate prefix array
  for (let i = 0; i < height.length; i++) {
    if (i == 0) {
      maxLeft.push(0);
      continue;
    }
    maxLeft.push(Math.max(maxLeft[maxLeft.length - 1], height[i - 1]));
  }

  // Populate suffix array
  for (let i = height.length - 1; i >= 0; i--) {
    if (i == height.length - 1) {
      maxRight.push(0);
      continue;
    }
    maxRight.push(Math.max(maxRight[maxRight.length - 1], height[i + 1]));
  }
  maxRight.reverse();

  for (let i = 0; i < height.length; i++) {
    maxWater += Math.max(0, Math.min(maxLeft[i], maxRight[i]) - height[i]);
  }

  return maxWater;
};

// Time complexity: O(n)
// Space complexity: O(n)
