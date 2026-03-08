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

/**
 * 二叉搜索树定义：对于任意节点，左子树的所有节点值都小于该节点值，右子树的所有节点值都大于该节点值，并且左右子树也必须是二叉搜索树。
 * 核心思路：中序遍历二叉树，得到的节点值序列应该是严格递增的
 * 时间复杂度：O(n)，每个节点访问一次
 * 空间复杂度：O(h)，递归调用栈的空间，h 是树的高度
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = true;
    const res = [];
    const stk = [];
    let pre = -Infinity;
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        const val = root.val;
        res.push(val);
        root = root.right;
        if (val <= pre) {
            return false;
        }
        pre = val;
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end