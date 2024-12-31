/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  tokens.forEach((token) => {
    if (Number.isInteger(parseInt(token))) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(calculate[token](num1, num2));
    }
  });
  return stack.pop();
};

const calculate = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => Math.trunc(num1 / num2),
};

// Time complexity: O(n)
// Space complexity: O(n)
