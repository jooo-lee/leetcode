/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // This will be O(log n) time complexity because we are
    // splitting the search area in half each time we compare target

    // Keep track of bounds of search area
    let left = 0;
    let right = nums.length - 1;

    // If left > right then we know that there are no more
    // elements to be searched and we have not found the target
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        // Look at the middle element
        if (target == nums[mid]) {
            // We have found the target element
            return mid;
        } else if (target < nums[mid]) {
            // Target is smaller than the middle element
            // So we search to the left of the middle element
            right = mid - 1;
        } else if (target > nums[mid]) {
            // Target is larger than the middle element
            // So we search to the right of the middle element
            left = mid + 1;
        }
    }

    // Target not found
    return -1;
};
