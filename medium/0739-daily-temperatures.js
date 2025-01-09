/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  return answer;
};

// Time complexity: O(n)
// Space complexity: O(n)
