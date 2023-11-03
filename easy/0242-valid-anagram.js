/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Check for matching string lengths - O(1)
    if (s.length !== t.length) return false;

    // Create a hash map
    const map = new Map();

    // For each char in s, check if it is a key in our hash map
    // If it is not, add it as a key with a val (count) of 1
    // If it is, increment its val (count) by 1
    // O(n)
    for (let char of s) {
        if (map.has(char)) {
            // Note: we can't do map.get(char)++, as map.get()
            // will return a constant, and we can't increment or
            // decrement a constant (something like 2++ would give
            // the error: Invalid left-hand side expression in postfix operation)
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    // For each char in t, check if it is is a key in our hash map
    // If it isn't, s and t are not anagrams and we can stop
    // If it is, then we decrement the val (count) of that key by 1
    // O(n)
    for (let char of t) {
        if (!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
    }

    // Iterate over our hash map and check if all keys have a val equal to 0
    // If so, s and t are anagrams
    // Otherwise, they are not
    // O(n)
    for (let val of map.values()) {
        if (val !== 0) return false;
    }

    return true;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of s or t

// ---------------------- Alternate solution: ----------------------
// Turn strings into arrays of characters, sort the arrays,
// turn the arrays back into strings and compare them
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     let sSorted = s.split("").sort().join("");
//     let tSorted = t.split("").sort().join("");
//     return sSorted === tSorted;
// };
// Sort time: O(nlog(n))
// Split and join time: O(n)
// Split space: O(n)
// Time complexity: O(nlog(n))
// Space complexity: O(n)
// where n is the length of s or t
