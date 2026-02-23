/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
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
// 1 
// var hasCycle = function(head) {
//     if (!head || !head.next) {
//         return false;
//     }
//     let node = head;
//     while(node) {
//         if (node.read === 1) {
//             return true;
//         } else {
//             node.read = 1;
//         }
//         node = node.next;
//     }
//     return false;
// };
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end