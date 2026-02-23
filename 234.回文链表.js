/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (57.90%)
 * Likes:    2202
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2M
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 * 
 * 
 * 
 * 
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 数组转存法-最易懂，遍历链表并存入数组，使用双指针遍历此数组
    // 时间复杂度O(n)，空间复杂度O(n)
    // const arr = [];
    // let temp = head;
    // while (temp) {
    //     arr.push(temp.val);
    //     temp = temp.next;
    // }
    // let left = 0, right = arr.length - 1;
    // while (left < right) {
    //     if (arr[left] !== arr[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }
    // return true;

    // 反转链表法-快慢指针找到链表中点，反转后半部分链表，比较前半部分和后半部分链表的值
    // 时间复杂度O(n)，空间复杂度O(1)

    // 递归法：外层维护一个指针，指向递归上一层，当递归到末尾时，开始回退，比较当前节点和外层指针指向的节点的值是否相等，并将外层指针后移
    // 时间复杂度O(n)，空间复杂度O(n)
    let front = head;
    const fn = node => {
        if (!node) return true;
        if (!fn(node.next)) {
            return false;
        }
        if (node.val !== front.val) {
            return false;
        }
        front = front.next;
        return true;
    };
    return fn(head);
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end