/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 使用优化后方法，每次循环当前层节点全部出列，下一层的节点入列，直到队列为空，返回层数。
 * 事件负责度: O(n)，其中 n 是二叉树中节点的数量。每个节点被访问一次。
 * 空间复杂度: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
// 广度优先遍历
var maxDepth = function(root) {
    if (!root) return 0;
    // let max = 0;
    // const queue = [[root]];
    // while (queue.length) {
    //     max++;
    //     const arr = queue.shift();
    //     const cur = [];
    //     while (arr.length) {
    //         const node = arr.shift();
    //         const left = node.left;
    //         const right = node.right;
    //         if (left) {
    //             cur.push(left);
    //         }
    //         if (right) {
    //             cur.push(right);
    //         }
    //     }
    //     arr.length === 0 && cur.length && queue.push(cur);
    // }
    // return max;
    // 优化：不需要每层都存储节点，直接记录当前层的节点数量，
    const curlevel = [root];
    let num = 0;
    while(curlevel.length) {
        const len = curlevel.length;
        num += 1;
        // 当前层全部出列，下一层的节点入列
        for (let i = 0; i < len; i++) {
            const node = curlevel.shift();
            if (node.left) {
                curlevel.push(node.left);
            }
            if (node.right) {
                curlevel.push(node.right);
            }
        }
    }
    return num;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxDepth;
// @after-stub-for-debug-end