/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      switch(s[i]) {
        case '(':
          stack.push(')');
          break;
        case '{':
          stack.push('}');
          break;
        case '[':
          stack.push(']');
          break;
        case ')':
        case '}':
        case ']':
          if (stack.pop() != s[i]) return false;
          break;
        default:
          break;
      }
    }
    return stack.length == 0;
};