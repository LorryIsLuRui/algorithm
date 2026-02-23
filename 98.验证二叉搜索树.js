/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 中序遍历解决
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = true;
    const res = [];
    const stk = [];
    let leftVal = -Infinity;
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        const val = root.val;
        res.push(val);
        root = root.right;
        if (val <= leftVal) {
            return false;
        }
        leftVal = val;
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end