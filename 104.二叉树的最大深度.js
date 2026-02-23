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
 * @param {TreeNode} root
 * @return {number}
 */
// 广度优先遍历
var maxDepth = function(root) {
    if (!root) return 0;
    const curlevel = [root];
    let num = 0;
    while(curlevel.length) {
        const len = curlevel.length;
        num += 1;
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

