/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (76.16%)
 * Likes:    1967
 * Dislikes: 0
 * Total Accepted:    795.5K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 
 * 
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 2000] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
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
 * 核心思想：从二叉树底层开始，先展开左子树变成链表，再展开右子树变成链表，遍历左子树直到末尾把右子树接到后面，赋值当前node.right时直接操作root
 * 时间复杂度：O(n)，其中 n 是二叉树的结点数。每个结点访问一次。
 * 空间复杂度：O(h)，其中 h 是二叉树的高度。递归调用栈的空间取决于二叉树的高度，最坏情况下（例如链状二叉树）为 O(n)，平均情况下为 O(log n)。
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null;
    const next = flatten(root.left);
    root.left = null;
    const next2 = flatten(root.right);
    if (next) {
        root.right = next;
        let tail = next;
        while (tail.right) {
            tail = tail.right;
        }
        tail.right = next2;
    } else {
        root.right = next2;
    }
    const cur = new TreeNode(root.val, null, root.right);
    return cur;
};
// 反向先序遍历
var flatten1 = function(root) {
    let prev = null;
    
    // 反向先序：右 → 左 → 根
    const dfs = (node) => {
        if (!node) return;
        
        dfs(node.right);    // 先处理右
        dfs(node.left);     // 再处理左
        
        // 当前节点的right指向前一个节点
        node.right = prev;
        node.left = null;
        prev = node;        // 更新prev
    };
    
    dfs(root);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = flatten;
// @after-stub-for-debug-end