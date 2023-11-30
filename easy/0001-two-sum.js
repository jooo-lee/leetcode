/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Create a hash map where each key corresponds to an element
    // in nums and its value corresponds to that element's index
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        // For each element in nums, check if (target - current element)
        // is a key in the hashmap
        if (map.has(diff)) {
            // If so, then we've found our answer and we can return that
            return [map.get(diff), i];
        }

        // If not, we add the current element along with its index to the
        // hash map
        map.set(nums[i], i);
    }
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of nums
