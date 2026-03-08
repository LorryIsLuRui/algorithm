/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (78.87%)
 * Likes:    1165
 * Dislikes: 0
 * Total Accepted:    368.5K
 * Total Submissions: 467K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目范围在 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * 递归：对于每个节点，递归地翻转其左右子树，结果交叉赋值
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree1 = function(root) {
    if (!root) return null;
    const left = invertTree1(root.left);
    const right = invertTree1(root.right);
    root.left = right;
    root.right = left;
    return root;
};

/**
 * 迭代：使用队列进行层序遍历，当前节点的左右子树进队列，并交换当前节点的左右子树。
 * 事件负责度: O(n)，其中 n 是二叉树中节点的数量。每个节点被访问一次。
 * 空间复杂度: O(n)，最坏情况下，队列中可能存储所有节点（当树是完全二叉树时）。
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if (!root) return null;
    const q = [root];
    while (q.length) {
        const node = q.shift();
        const left = node.left || null;
        const right = node.right || null;
        left && q.push(left);
        right && q.push(right);
        node.right = left;
        node.left = right;
    }
    return root;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = invertTree;
// @after-stub-for-debug-end