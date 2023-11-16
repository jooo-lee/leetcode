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
        /* 
        Store curr.next so that we can break the link between curr 
        and curr.next without worrying about losing the rest of the LL
        */
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

/* 
Time complexity: O(n)
Space complexity: O(1)
where n is the length of our LL
*/
