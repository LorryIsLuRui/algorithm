/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (63.23%)
 * Likes:    3073
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    const dfs = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return dfs(root.left, root.right);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end


 // const queue = [root];
    // let isSym = false;
    // while (queue.length) {
    //     const len = queue.length;
    //     for (let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         if (!node) continue;
    //         let left = node.left || new TreeNode(null);
    //         let right = node.right || new TreeNode(null);
    //         queue.push(left);
    //         queue.push(right);
    //     }
    //     const newLen = queue.length;
    //     for (let i = 0; i < newLen / 2; i++) {
    //         const left = queue[i];
    //         const right = queue[newLen - 1 - i];
    //         if (left.val === right.val) {
    //             isSym = true;
    //         }
    //         if (!isSym) break;
    //     }
    // }
    // return isSym;