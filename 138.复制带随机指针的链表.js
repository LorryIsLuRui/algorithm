/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head.val) return [];
    const result = [];
    const nodeMap = new Map();
    const insertNode = node => {
        if (!node) return;
        const curr = [];
        const nodeVal = node.val;
        if (nodeVal) {
            curr.push(nodeVal);
        }
        if (node.random) {
            const val = node.random.val;
            !nodeMap.get(val) && nodeMap.set(val, new Node(-1, null, null));
            curr.push(nodeMap.get(val));
        } else {
            curr.push(new Node(null));
        }
        const resultLen = result.length;
        if (nodeMap.get(nodeVal)) {
            nodeMap.get(nodeVal).val = resultLen
        } else {
            nodeMap.set(nodeVal, new Node(resultLen, null, null))
        }
        result.push(curr);
        node && node.next && insertNode(node.next);
    };
    insertNode(head);
    for (let i = 0; i < result.length; i++) {
        result[i][1] = result[i][1].val;
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end