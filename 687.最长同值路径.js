/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 *
 * https://leetcode.cn/problems/longest-univalue-path/description/
 *
 * algorithms
 * Medium (48.98%)
 * Likes:    855
 * Dislikes: 0
 * Total Accepted:    99.1K
 * Total Submissions: 202K
 * Testcase Example:  '[5,4,5,1,1,null,5]'
 *
 * 给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。 这条路径可以经过也可以不经过根节点。
 *
 * 两个节点之间的路径长度 由它们之间的边数表示。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：root = [5,4,5,1,1,5]
 * 输出：2
 *
 *
 * 示例 2:
 *
 *
 *
 *
 * 输入：root = [1,4,5,4,4,5]
 * 输出：2
 *
 *
 *
 *
 * 提示:
 *
 *
 * 树的节点数的范围是 [0, 10^4]
 * -1000 <= Node.val <= 1000
 * 树的深度将不超过 1000
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
/**
 * DFS 返回“单边最长”，全局记录“左右拼接最长”
 * 时间复杂度o(n)
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    let max = 0;
    const dfs = (node) => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        let leftPath = 0;
        let rightPath = 0;
        if (node.left && node.left.val === node.val) {
            leftPath = left + 1;
        }
        if (node.right && node.right.val === node.val) {
            rightPath = right + 1;
        }
        // 🔥 关键：左右可以拼成一条路径
        max = Math.max(max, leftPath + rightPath);
        // 👇 返回单边最长路径
        return Math.max(leftPath, rightPath);
    };
    dfs(root);
    return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestUnivaluePath;
// @after-stub-for-debug-end
