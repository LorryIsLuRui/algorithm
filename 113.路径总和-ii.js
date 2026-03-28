/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode.cn/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (64.18%)
 * Likes:    1236
 * Dislikes: 0
 * Total Accepted:    509.3K
 * Total Submissions: 793.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点总数在范围 [0, 5000] 内
 * -1000
 * -1000
 *
 *
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const res = [];
    const path = [];

    const dfs = (node, restSum) => {
        if (!node) return;
        if (node.val > restSum) return;
        path.push(node.val);
        restSum -= node.val;

        if (!node.left && !node.right && restSum === 0) {
            res.push([...path]); // 复制一份当前路径
        }

        dfs(node.left, restSum);
        dfs(node.right, restSum);
        // 回溯 同层撤销上面push的 node.val
        path.pop();
    };
    dfs(root, targetSum);
    return res;
};
// @lc code=end

// var pathSum = function (root, targetSum) {
//     const res = [];
//     const path = [];

//     const dfs = (node, restSum) => {
//         if (!node && node?.val !== restSum) {
//             path.pop();
//             return;
//         }
//         if (node.val > restSum) return;
//         path.push(node.val);
//         if (restSum === node.val) {
//             res.push(path.slice());
//             return;
//         }
//         node.left && dfs(node.left, restSum - node.val);
//         node.right && dfs(node.right, restSum - node.val);
//         path.pop();
//     };
//     dfs(root, targetSum);
//     return res;
// };
// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end
