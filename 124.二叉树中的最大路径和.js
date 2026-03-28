/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (47.60%)
 * Likes:    2526
 * Dislikes: 0
 * Total Accepted:    670.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个
 * 节点，且不一定经过根节点。
 *
 * 路径和 是路径中各节点值的总和。
 *
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 *
 * 示例 2：
 *
 *
 * 输入：root = [-10,9,20,null,null,15,7]
 * 输出：42
 * 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目范围是 [1, 3 * 10^4]
 * -1000 <= Node.val <= 1000
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
/** o(n) o(h)
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let max = -Infinity;
    const dfs = (node) => {
        if (!node) return 0;
        const left = Math.max(0, dfs(node.left)); // 是负数 就丢弃
        const right = Math.max(0, dfs(node.right));
        // 单边最大和
        let curMax = node.val + Math.max(left, right);
        // 上面已经做了负数处理，这里无脑加和  “左路径 + 根 + 右路径”这个弯钩形状。
        max = Math.max(max, left + right + node.val);
        return curMax;
    };
    dfs(root);
    return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end
