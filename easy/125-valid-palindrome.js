/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length == 1) return true;
    // remove all non-alphanumeric chars (including spaces)
    let sMod = s.replace(/[^a-zA-Z0-9]/g, "");
    // make all uppercase letters lowercase
    sMod = sMod.toLowerCase();
    // reverse and compare with non-reversed modified string
    sModRev = sMod.split("").reverse().join("");
    return sMod == sModRev;
};