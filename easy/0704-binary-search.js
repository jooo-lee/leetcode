/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // This will be O(log n) time complexity because we are splitting
    // the search area in half each time we go through one loop iteration

    // Keep track of bounds of search area
    let start = 0;
    let end = nums.length - 1;

    // If start > end then we know that there are no more
    // elements to be searched and we have not found the target
    while (start <= end) {
        let middle = Math.round((start + end) / 2);

        if (target < nums[middle]) {
            // Target is smaller than the middle element
            // So we search to the left of the middle element
            end = middle - 1;
        } else if (target > nums[middle]) {
            // Target is larger than the middle element
            // So we search to the right of the middle element
            start = middle + 1;
        } else {
            // We have found the target element
            return middle;
        }
    }

    // Target not found
    return -1;
};

// Time complexity: O(log n)
// Space complexty: O(1)
// where n is the size of the nums array
