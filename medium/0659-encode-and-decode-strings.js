class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  // This is more efficient than having output = '' and doing
  // output += str.length + '#' + str each iteration of strs.
  encode(strs) {
    let output = [];

    strs.forEach((str) => {
      output.push(str.length);
      output.push('#');
      output.push(str);
    });

    return output.join('');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const output = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] != '#') {
        j++;
      }

      // j will be pointing at #
      const wordLen = parseInt(str.slice(i, j));
      output.push(str.slice(j + 1, j + 1 + wordLen));
      i = j + 1 + wordLen;
    }

    return output;
  }
}

// Time complexity: O(n) for encode and decode
// Space complexity: O(1) for encode and decode
// where n is the sum of the lengths of all strings in strs
