/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (52.53%)
 * Likes:    3244
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 3.8M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
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
 * 核心思想：一趟扫描，递归，在递归过程中，首先声明一个temp链表，idx表示当前逆序的索引，当等于 n 时，把前一个节点.next指向当前节点的下一个节点
 * 时间复杂度：O(n)，空间复杂度：O(n)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 快慢指针
    const dummy = new ListNode(0, head);
    let fast = dummy, slow = dummy;

    // fast 先走n+1步, 这样最终 快指针到尾部时候，慢指针正好在倒数第n个节点的前一个节点
    // 时间复杂度O(n)，空间复杂度O(1)
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
    
    // 递归
    // let idx = 0;
    // let temp = new ListNode(0, head);
    // const fn = (node, prev) => {
    //     if (node === null) return 0;
    //     idx = fn(node.next, node) + 1;
    //     if (idx === n) {
    //         prev.next = node.next;
    //     }
    //     return idx;
    // };
    // fn(head, temp);
    // return temp.next;
};
// @lc code=end

