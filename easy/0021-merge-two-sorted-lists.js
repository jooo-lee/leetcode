/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Next of dummy will be head of output LL
    const dummy = new ListNode();
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = list1; // Adding list1 ListNode to output LL
            list1 = list1.next;
        } else {
            tail.next = list2; // Adding list2 ListNode to output LL
            list2 = list2.next;
        }
        tail = tail.next; // Update tail
    }

    // Add rest of remaining other list if we reach end of one list
    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }

    return dummy.next;
};
