/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Naive solution

    const set = new Set(); // Keep track of visited ListNodes

    // Add ListNodes to set
    while (head) {
        if (set.has(head)) return true; // We've found a visited ListNode
        set.add(head);
        head = head.next;
    }

    return false;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the length of the LL
