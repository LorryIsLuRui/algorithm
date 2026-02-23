/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (68.12%)
 * Likes:    3971
 * Dislikes: 0
 * Total Accepted:    2.3M
 * Total Submissions: 3.4M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
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
 * 核心思想：一个哑结点，一个指针，按位比较两个链表，小的值接在指针后面，两个链表后移，当一个链表结束，把剩余的链表接在指针后面
 * 时间复杂度O(m+n)，空间复杂度O(1)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-1);
    let temp = dummy;
    // 虽然 while 循环只执行 min(m,n) 次，但：
    //     list1 的每个节点：都进入 while 循环进行了一次比较 → 访问 m 次
    //     list2 的每个节点：也都进入 while 循环进行了比较 → 访问 n 次
    //     即使 list2 剩余的节点是直接连接的，
    //     在前 min(m,n) 次迭代中，list2 的这些节点也被访问过了
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    temp.next = list1 || list2;
    return dummy.next;
};
// @lc code=end

