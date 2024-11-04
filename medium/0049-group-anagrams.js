/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // O(mn) space
  const map = new Map();

  // O(m) time
  strs.forEach((str) => {
    // O(nlogn) time, sorting is bottleneck
    const sorted = Array.from(str).sort().join('');

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted).push(str);
  });

  // O(mn) space
  return Array.from(map.values());
};

// m is the length of strs, n is the length of the longest str in strs
// Time complexity: O(mnlogn)
// Space complexity: O(mn)
