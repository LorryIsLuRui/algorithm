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
// 核心思想：把所有左子树都入栈，直到没有左子树了，此时弹出栈顶元素，访问它的右子树
// 时间复杂度：O(n)
// 空间复杂度：O(n)
var inorderTraversal = function(root) {
    const res = [];
    const stk = []; // 栈,存储根节点的所有左子树，当左子树访问完后，弹出根节点，访问右子树
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