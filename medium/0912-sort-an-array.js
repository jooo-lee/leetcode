/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    /**
     * Base case:
     * - If nums is just one element, return nums (sorted by definition)
     *
     * Recursive case:
     * - Sort left half of nums
     * - Sort right half of nums
     * - Merge two sorted halves by comparing first elements of each half
     *   and placing the lower number in the output array
     * - If either half still has elements left at the end of the merge step,
     *   add them all to the end of the output array
     * - Return output array
     */

    if (nums.length === 1) return nums;

    const halfLen = Math.ceil(nums.length / 2);

    // Recursively sort halves
    const leftHalf = sortArray(nums.slice(0, halfLen));
    const rightHalf = sortArray(nums.slice(halfLen));

    // Merge step
    let outputArr = [];
    while (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] <= rightHalf[0]) {
            outputArr.push(leftHalf.shift());
        } else {
            outputArr.push(rightHalf.shift());
        }
    }

    // Check if either half still has elements
    if (leftHalf.length) {
        outputArr = outputArr.concat(leftHalf);
    } else if (rightHalf.length) {
        outputArr = outputArr.concat(rightHalf);
    }

    return outputArr;
};

// Time complexity: O(nlogn)
// Space complexity: O(n)
