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
 * 前提：链表中存在环，但是快慢指针找到的环相遇的位置 != 环入口
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1. 可以用set存储,每次存之前先判断在不在
// 2. 快慢指针
var detectCycle = function(head) {
    // 哈希 时间复杂度O(n) 空间复杂度O(n)
    // if (!head || !head.next) {
    //     return null;
    // }
    // let set = new Set();
    // let temp = head;
    // while(temp) {
    //     if (set.has(temp)) {
    //         return temp;
    //     } else {
    //         set.add(temp);
    //     }
    //     temp = temp.next;
    // }
    // return null;
    
    // 双指针法：
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            // 快慢指针检测环存在

            // temp从链表头部出发，slow从相遇点出发，每次都走一步，最终相遇点就是环入口
            let temp = head;
            while(temp !== slow) {
                temp = temp.next;
                slow = slow.next;
            }
            return temp;
        }
    }
    return null;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = detectCycle;
// @after-stub-for-debug-end