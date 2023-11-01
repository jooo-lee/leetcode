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
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // Recursive calls to continue swapping children
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
