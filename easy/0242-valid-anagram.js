/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Create a hash map 
    const map = new Map();

    // For each char in s, check if it is a key in our hash map
    // If it is not, add it as a key with a val of 1
    // If it is, increment its val by 1
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            // Note: we can't do map.get(s[i])++, as map.get()
            // will return a constant, and we can't increment or 
            // decrement a constant (something like 2++ would give
            // the error: Invalid left-hand side expression in postfix operation)
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    // For each char in t, check if it is is a key in our hash map
    // If it isn't, s and t are not anagrams and we can stop
    // If it is, then we decrement the val of that key by 1
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1);
        } else {
            return false;
        }
    }

    // Iterate over our hash map and check if all keys have a val equal to 0
    // If so, s and t are anagrams
    // Otherwise, they are not
    for (let val of map.values()) {
        if (val != 0) return false;
    }
    return true;
};