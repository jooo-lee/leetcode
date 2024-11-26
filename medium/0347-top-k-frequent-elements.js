/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Count occurences using a hashmap
  const occurences = new Map();
  nums.forEach((num) => {
    if (occurences.has(num)) {
      occurences.set(num, occurences.get(num) + 1);
    } else {
      occurences.set(num, 1);
    }
  });

  // Sort hashmap in descending order of values/occurences
  const sortedMap = [...occurences].sort((a, b) => b[1] - a[1]);

  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(sortedMap[i][0]);
  }
  return res;

  // One liner of above block of code
  // return sortedMap.slice(0, k).map(pair => pair[0]);
};

// Time complexity: O(nlogn)
// Space complexity: O(n)
