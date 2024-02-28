/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;

        // We know that the last version is bad
        let result = n;

        // Must be <=, not <. To see why, try with n = 3 and bad = 1
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                result = mid;

                // Skip versions we know are bad
                right = mid - 1;
            } else {
                // Skip versions we know are good
                left = mid + 1;
            }
        }

        return result;
    };
};

// Time complexity: O(log n)
// Space complexty: O(1)
