/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length == 1) return true;
    // Remove all non-alphanumeric chars (including spaces)
    let sMod = s.replace(/[^a-zA-Z0-9]/g, "");
    // Make all uppercase letters lowercase
    sMod = sMod.toLowerCase();
    // Reverse and compare with non-reversed modified string
    sModRev = sMod.split("").reverse().join("");
    return sMod == sModRev;
};
