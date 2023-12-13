/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Last index of nums1 (including zeroes)
    let last = m + n - 1;

    // Merge elements into nums1 starting from largest element
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }

    // Merge any remaining elements in nums2
    while (n > 0) {
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
};

// Time complexity: O(m + n)
// Space complexity: O(1)
// where m is the number of "real" elements in nums1
// and n is the number of elements in nums2
