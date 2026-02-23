/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (46.36%)
 * Likes:    11777
 * Dislikes: 0
 * Total Accepted:    2.7M
 * Total Submissions: 5.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
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
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * 核心思想1：递归
 *    时间复杂度：O(m+n)，其中 m 和 n 分别是两个链表的长度。递归需要处理所有 m+n 个节点。
 *    空间复杂度：O(max(m, n))，递归调用栈的空间取决于最长链表的长度。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 迭代法：每次相加相同索引的数值，连接链表，并记录进位
    // 时间复杂度O(m+n)，空间复杂度O(1)
    let head = new ListNode(0), carry = 0;
    let prev = head;
    while (l1 || l2) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const sum = v1 + v2 + carry;
        prev.next = new ListNode(sum % 10);
        prev = prev.next;
        carry = Math.floor(sum / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (carry > 0) {
        prev.next = new ListNode(carry);
    }
    return head.next;

    // 递归
    // 声明一个递归函数，参数为(node1, node2, carry = 0)
    // 递归终止条件：当 node1、node2 和 carry 都为 0 时，返回 null，其他情况分别相加两个值和进位，创建一个新节点，next指向递归调用函数处理下一个节点
    
    // const fn = (node1, node2, carry = 0) => {
    //     if (!node1 && !node2 && carry === 0) {
    //         return null;
    //     }
    //     const v1 = node1 ? node1.val : 0;
    //     const v2 = node2 ? node2.val : 0;
    //     const sum = v1 + v2 + carry;
    //     const newNode = new ListNode(sum % 10);
    //     newNode.next = fn(node1 ? node1.next : null, node2 ? node2.next : null, Math.floor(sum / 10));
    //     return newNode;
    // }
    // return fn(l1, l2);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end