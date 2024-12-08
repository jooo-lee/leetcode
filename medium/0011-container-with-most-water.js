/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, area);

    /* 
    Let a be the current shorter line, b be the current longer line and i be
    any line between these two that is not a or b. Any area produced using a 
    and i will have a smaller area than the area produced by a and b, even if 
    i is taller than b. This means that we do not need to calculate the area
    for any line combination a and i as we know that the area produced by a and
    b will be greater than any area produced by a and i. Therefore when choosing
    which pointer to move, we move the pointer pointing to the shorter line.

    If both lines are the same height, it doesn't matter which pointer we move.
    */
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

// Time complexity: O(n)
// Space complexity: O(1)
