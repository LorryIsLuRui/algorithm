/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (72.87%)
 * Likes:    1293
 * Dislikes: 0
 * Total Accepted:    771.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,null,5,null,4]
 * 
 * 输出：[1,3,4]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3,4,null,null,null,5]
 * 
 * 输出：[1,3,4,5]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,null,3]
 * 
 * 输出：[1,3]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = []
 * 
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,100]
 * -100 <= Node.val <= 100 
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
 * 核心思想：层序遍历，每层最后一个节点就是右视图的节点
 * 时间复杂度：O(n)，空间复杂度：O(w)，其中 w 是树的最大宽度
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while(queue.length) {
        const len = queue.length; // 当前层节点数
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            // 每层最后一个节点就是右视图的节点
            if (i === len - 1) {
                res.push(node.val);
            }
        }
    }
    return res;
};
// 核心思想：DFS，先访问右子树，再访问左子树，这样每层第一次访问的节点就是右视图的节点
// 时间复杂度：O(n)，空间复杂度：O(h)，其中 h 是树的高度，递归调用栈的空间复杂度
var rightSideView_dfs = function(root) {
    const res = [];
    
    const dfs = (node, depth) => {
        if (!node) return;
        
        // 如果是第一次访问这个深度，就是右视图
        if (depth === res.length) {
            res.push(node.val);
        }
        
        // 先遍历右子树，后遍历左子树
        // 这样能保证每层第一次遇到的就是最右节点
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    };
    
    dfs(root, 0);
    return res;
};
// @lc code=end

