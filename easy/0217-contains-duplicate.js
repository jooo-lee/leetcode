/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seen = new Set();

    for (const num of nums) {
        // We can exit early if duplicate is found
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of nums
