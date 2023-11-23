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
    // Iterative solution

    /* 
    Since we don't know which ListNode will be the first ListNode of our output LL,
    we use a dummy node so that we don't need to handle adding a ListNode to
    an empty LL - all ListNode insertions are to the end of a non-empty LL.
    This way our first ListNode doesn't need to be a "special case" and this
    simplifies our code greatly.
    */
    const dummy = new ListNode();
    let tail = dummy; // Keep track of tail so we can append ListNodes to output LL

    while (list1 && list2) {
        if (list1.val < list2.val) {
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

    // Return the head of the output LL
    return dummy.next;
};

// Time complexity: O(n + m)
// Space complexity: O(1)
// where n is the length of list1
// and m is the length of list2

// ------------------------- Alternate solution -------------------------
var mergeTwoLists = function (list1, list2) {
    // Recursive solution

    // Base case
    // The end of a list has been reached, add the remaining ListNodes of
    // the other list to the output LL
    // Also handles edge cases where one or both LLs are empty
    if (!list1) return list2;
    if (!list2) return list1;

    // Make recursive calls to add ListNodes to output LL
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// Time complexity: O(n + m)
// Space complexity: O(n + m) - recursive call stack
// where n is the length of list1
// and m is the length of list2
