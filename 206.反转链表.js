/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (76.34%)
 * Likes:    4049
 * Dislikes: 0
 * Total Accepted:    2.7M
 * Total Submissions: 3.5M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 
 * 
 * 
 * 
 * 
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * 
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
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 迭代法（双指针）时间复杂度O(n)，空间复杂度O(1)[空间复杂度忽略链表本身所占空间， curr,next,prev只占用常数空间]
    // if (!head) return null;
    // let prev = null;
    // // curr是当前节点，不是整条链表
    // let curr = head;
    // while(curr) {
    //     const next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;

    // 递归法 时间复杂度O(n)，空间复杂度O(n) （递归栈空间）
    // 递归到链接结尾，返回最后一个节点作为新的头结点，然后在回退的过程中将每个节点的next指向前一个节点，最后返回新的头结点
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end