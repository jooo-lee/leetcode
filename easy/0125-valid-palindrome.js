/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    while (l < r && !alphaNum(s[l])) {
      l++;
    }

    while (l < r && !alphaNum(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() != s[r].toLowerCase()) {
      return false;
    }

    l++, r--;
  }

  return true;
};

const alphaNum = (c) => {
  return (
    (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
  );
};

// Time complexity: O(n)
// Space complexity: O(1)
// where n is the length of s

// ---------------------- Alternate solution: ----------------------

var isPalindrome = function (s) {
  // Remove non-alphanumeric characters - O(n)
  let sMod = s.replace(/[^a-zA-Z0-9]/g, '');

  // Convert any uppercase letters into lowercase letters - O(n)
  sMod = sMod.toLowerCase();

  let lPtr = 0;
  let rPtr = sMod.length - 1;

  // Compare character at lPtr with character at rPtr - O(n)
  while (lPtr < rPtr) {
    // Characters not matching - not valid palindrome
    if (sMod[lPtr] != sMod[rPtr]) return false;

    // Move pointers so we can compare next two characters
    lPtr++;
    rPtr--;
  }

  // Valid palindrome found
  return true;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of s

// ---------------------- Alternate solution: ----------------------

var isPalindrome = function (s) {
  if (s.length == 1) return true;

  // Remove all non-alphanumeric chars (including spaces)
  let sMod = s.replace(/[^a-zA-Z0-9]/g, '');

  // Make all uppercase letters lowercase
  sMod = sMod.toLowerCase();

  // Reverse and compare with non-reversed modified string
  sModRev = sMod.split('').reverse().join('');

  return sMod == sModRev;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of s
