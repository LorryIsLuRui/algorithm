/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// 修改了链表
var detectCycle = function(head) {
    let node = head;
    while (node) {
        if (!node.read) {
            node.read = 1;
            node = node.next;
        } else {
            return node;
        }
    }
    return null;
};
// 2. 快慢指针  不理解 不懂
// 3. 可以用set存储,每次存之前先判断在不在
// var detectCycle = function(head) {
//     let fast = head;
//     let slow = head;
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast === slow) {
//             return fast;
//         }
//     }
//     return null;
// };
// @lc code=end


// @after-stub-for-debug-begin
module.exports = detectCycle;
// @after-stub-for-debug-end