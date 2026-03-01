/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode.cn/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (59.78%)
 * Likes:    1668
 * Dislikes: 0
 * Total Accepted:    769.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是 平衡二叉树  
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,3,3,null,null,4,4]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数在范围 [0, 5000] 内
 * -10^4 <= Node.val <= 10^4
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
 * 平衡二叉树定义：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * 核心思路：递归计算每个节点的左右子树高度，并判断左右子树是否满足平衡条件
 * 时间复杂度：O(n)，每个节点访问一次
 * 空间复杂度：O(h)，递归调用栈的空间，h 是树的高度
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    const calcHeight = node => {
        if (node === null) return 0;
        return 1 + Math.max(calcHeight(node.left), calcHeight(node.right));
    };
    return Math.abs(calcHeight(root.left) - calcHeight(root.right)) <= 1
        && isBalanced(root.left)
        && isBalanced(root.right);
};
// @lc code=end

