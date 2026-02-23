/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归
// var inorderTraversal = function(node) {
//     const result = [];
//     if (!node) return [];
//     result.push(...inorderTraversal(node.left));
//     result.push(node.val);
//     result.push(...inorderTraversal(node.right));
//     return result;
// };

// 迭代
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end