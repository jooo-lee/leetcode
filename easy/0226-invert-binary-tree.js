/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // Current tree empty
    if (root == null) return null;

    // Swap children of current root node
    [root.left, root.right] = [root.right, root.left];

    // Recursive calls to continue swapping children
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

// Time complexity: O(n) - we are visiting each node
// n is the total number of nodes in our binary tree
// Space complexity: O(h) - we have at most h calls in our recursive call stack at a time
// h is the height of our binary tree
