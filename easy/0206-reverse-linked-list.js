/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // Iterative solution using three pointers
    let prev = null;
    let curr = head;
    let next = null;

    // Stop loop when curr points to null - O(n)
    while (curr) {
        // Store curr.next so that we can break the link between curr
        // and curr.next without worrying about losing the rest of the LL
        next = curr.next;

        // Reverse curr.next by setting it to point to prev
        curr.next = prev;

        // Advance prev and curr pointers
        prev = curr;
        curr = next;
    }

    // Prev will point to our new head, or the old last ListNode
    return prev;
};

// Time complexity: O(n)
// Space complexity: O(1)
// where n is the length of our LL

// ------------------------- Alternate solution -------------------------

var reverseList = function (head) {
    // Recursive solution

    // Base case - if we have an empty LL or we have reached the
    // end of the LL (in both cases we have a reversed LL - empty
    // LL is reversed and LL of one ListNode is reversed)
    if (!head) return head;

    // Keep track of head of reversed LL
    let newHead = head;
    // We have not reached the end of the LL, keep going - O(n)
    if (head.next) {
        // Make recursive call, reverse the rest of the LL
        newHead = reverseList(head.next);

        // Reverse link (append current ListNode to reversed LL)
        head.next.next = head;

        // Set current ListNode (current tail of reversed LL) to point to null
        head.next = null;
    }

    return newHead;
};

// Time complexity: O(n)
// Space complexity: O(n) - we are making n recursive calls (n calls in our call stack)
// where n is the length of our LL
