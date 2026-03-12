/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * 核心思想：递归遍历节点的左右子树，计算高度，同时更新最大直径（当前直径：left+right）。递归函数返回的是以当前节点为根时的最大路径
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
   let res = -Infinity;
    const dfs = node => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = diameterOfBinaryTree;
// @after-stub-for-debug-end
