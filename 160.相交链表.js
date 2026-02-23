/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 核心思路：双指针：每次取next，当为null时，赋值为另一条链表的头指针，这样两个指针走过的路程相同，如果有交点，最终会在交点相遇；如果没有交点，最终会在null相遇
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)
 * 
 * 哈希集合
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
   if (headA === null || headB === null) {
        return null;
    }

    const visited = new Set();
    let temp = headA;
    while (temp) {
        if (!visited.has(temp)) {
            visited.add(temp);
            temp = temp.next;
        }
    }
    temp = headB;
    while (temp) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    // 双指针法
    // let pA = headA, pB = headB;
    // while (pA !== pB) {
    //     pA = pA === null ? headB : pA.next;
    //     pB = pB === null ? headA : pB.next;
    // }
    // return pA;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end