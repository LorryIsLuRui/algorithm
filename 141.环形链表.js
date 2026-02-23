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
// 快慢指针为什么是快指针多走两步？
    // 3步、4、5...也行，但是快指针走得太快，浪费
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) { // 确保能走两步
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