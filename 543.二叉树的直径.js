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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var res = 0;
    const deep = node => {
        if (node === null) return 0;
        const l = deep(node.left);
        const r = deep(node.right);
        res = Math.max(res, l + r);
        return Math.max(l, r) + 1;
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = diameterOfBinaryTree;
// @after-stub-for-debug-end