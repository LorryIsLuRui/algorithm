/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode.cn/problems/sort-list/description/
 *
 * algorithms
 * Medium (67.69%)
 * Likes:    2702
 * Dislikes: 0
 * Total Accepted:    861.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
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
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 核心思想：找到链表中心点，切断链表，对左右两部分递归排序，最后合并两个有序链表
 * 时间复杂度：O(nlogn)，空间复杂度：O(logn)，递归调用栈的空间复杂度
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head, prev = null;
    // 快慢指针找到链表中点
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow 是链表中点
    prev.next = null; // 切断链表
    const left = sortList(head); // 递归排序前半部分
    const right = sortList(slow); // 递归排序后半部分
    return merge(left, right); // 合并两个有序链表
};
const merge = (l1, l2) => {
    const dummy = new ListNode(0);
    let temp = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;
    return dummy.next;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end