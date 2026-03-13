/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode.cn/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (48.48%)
 * Likes:    2232
 * Dislikes: 0
 * Total Accepted:    573K
 * Total Submissions: 1.2M
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * 输出：3
 * 解释：和等于 8 的路径有 3 条，如图所示。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,1000]
 * -10^9  
 * -1000  
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
 * 核心思路: 前缀和 + 哈希表
 * 1. 使用一个哈希表 map 来存储前缀和及其出现的次数。初始时，前缀和为 0 出现 1 次。
 * 2. 定义一个递归函数 dfs(node, currentSum)，用于遍历二叉树并计算路径和。
 * 时间复杂度: O(n)，其中 n 是二叉树中节点的数量。每个节点被访问一次。
 * 空间复杂度: O(n)，最坏情况下，哈希表中可能存储所有节点的前缀和，递归调用栈的深度也可能达到 n。
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const map = new Map();  // 存储前缀和及其出现的次数
    map.set(0, 1);  // 这代表“如果当前路径和正好等于目标值，它减去 0 也是目标值”，确保能统计到从根节点开始的路径。
    const dfs = (node, currentSum) => {
        if (!node) return 0;
        currentSum += node.val;
        const count = map.get(currentSum - targetSum) || 0;  // 查找出现的次数: currentSum - targetSum表示当前路径和下，满足targetSum的节点值，如果存在肯定在map里，get(...)返回这个值出现的次数
        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        const leftCount = dfs(node.left, currentSum);
        const rightCount = dfs(node.right, currentSum);
        map.set(currentSum, map.get(currentSum) - 1);  // 回溯，当前节点遍历完毕，将当前前缀和的出现次数减1，
        return count + leftCount + rightCount;
    }
    return dfs(root, 0);
};
// @lc code=end

