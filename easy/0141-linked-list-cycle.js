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

// ------------------------- Alternate solution -------------------------

var hasCycle = function (head) {
    // Edge cases - no cycle
    if (!head || !head.next) return false;

    // Initialize slow and fast pointers
    let slow = head;
    let fast = head.next;

    /* 
    Fast will reach the end of the LL before slow (if there is no cycle), 
    so if it points to null, then we know that there is no cycle. We also need
    to check whether fast.next is null or not at each iteration of the loop, since
    we are moving fast by two nodes. 

    If there is no cycle, slow and fast will never meet since fast moves twice as
    fast as slow. However, if there is a cycle, they are bound to meet. NeetCode's 
    video explanation of why they are bound to meet is pretty good.
    */
    while (fast && fast.next) {
        // Slow and fast pointers have met each other - cycle found!
        if (slow == fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    // No cycle found
    return false;
};

// Time complexty: O(n)
// Space complexity: O(1)
// where n is the length of the LL
