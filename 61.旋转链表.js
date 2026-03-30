/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.45%)
 * Likes:    1183
 * Dislikes: 0
 * Total Accepted:    503.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!k || !head) return head;
    let last = head;
    let len = 1;
    while (last && last.next) {
        last = last.next;
        len++;
    }
    k = k % len;
    last.next = head; // 连成环
    let step = len - k;

    let newTail = last;
    while (step > 0) {
        // 找到k之前的节点
        newTail = newTail.next;
        step--;
    }
    // 设定新头，断开环
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end
