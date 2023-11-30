/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const set = new Set();

    for (num of nums) {
        // We can exit early if duplicate is found
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of nums
