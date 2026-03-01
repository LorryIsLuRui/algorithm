/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
 *
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (79.86%)
 * Likes:    1072
 * Dislikes: 0
 * Total Accepted:    678.8K
 * Total Submissions: 849.8K
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数为 n 。
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 中序遍历，使用常量记录，当count===k时，记录结果并返回
    // 时间复杂度O(n)，空间复杂度O(h)，h为树的高度
    let count = 0, result = null;
    const inorder = node => {
        if (!node) return null;
        if (result !== null) return null;
        inorder(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return null;
        }
        inorder(node.right);
    }
    inorder(root);
    return result;

    // 中序遍历二叉搜索树，得到一个升序数组，返回第 k 个元素
    // 时间复杂度O(n)，空间复杂度O(n)
    // const arr = [];
    // const fn = node => {
    //     if (!node) return null;
    //     if (arr.length >= k) return null;
    //     if (node.left) {
    //         const l = fn(node.left);
    //          l && arr.push(l);
    //     }
    //     arr.push(node.val);
    //     if (node.right) {
    //         const r = fn(node.right);
    //         r && arr.push(r);
    //     }
    //     return null;
    // }
    // fn(root);
    // return arr[k - 1];
};
// @lc code=end

