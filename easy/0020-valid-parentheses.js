/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Use an array as a stack
    const stack = [];

    // Create a hashmap with closing parentheses as keys and corresponding
    // opening parentheses as values
    const map = new Map();
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");

    // O(n)
    for (const paren of s) {
        /* 
        If the current parenthesis is closing, first check if the stack is empty.
        If so, return false, as we know that we have a closing parenthesis without
        a corresponding opening parenthesis. 
        If the stack is not empty, pop from the stack and check that the parenthesis
        popped matches the current closing parenthesis (if they do not match, return
        false).

        If the current parenthesis is opening, we can simply push it to the stack.
        */

        if (map.has(paren)) {
            // Closing parenthesis case
            if (stack.length == 0 || stack.pop() != map.get(paren)) {
                return false;
            }
        } else {
            // Opening parenthesis case
            stack.push(paren);
        }
    }

    // Make sure all opening parentheses have corresponding closing parentheses
    return stack.length == 0;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of s
