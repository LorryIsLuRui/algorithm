/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 *
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/description/
 *
 * algorithms
 * Medium (45.40%)
 * Likes:    722
 * Dislikes: 0
 * Total Accepted:    141.9K
 * Total Submissions: 312.1K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。
 * 
 * 树的 最大宽度 是所有层中最大的 宽度 。
 * 
 * 
 * 
 * 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的
 * null 节点，这些 null 节点也计入长度。
 * 
 * 题目数据保证答案将会在  32 位 带符号整数范围内。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,3,2,5,3,null,9]
 * 输出：4
 * 解释：最大宽度出现在树的第 3 层，宽度为 4 (5,3,null,9) 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,3,2,5,null,null,9,6,null,7]
 * 输出：7
 * 解释：最大宽度出现在树的第 4 层，宽度为 7 (6,null,null,null,null,null,7) 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,3,2,5]
 * 输出：2
 * 解释：最大宽度出现在树的第 2 层，宽度为 2 (3,2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目范围是 [1, 3000]
 * -100 <= Node.val <= 100
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
 * 核心思想：使用广度优先遍历+max取舍+for遍历当前层并入列下一层，
 *      queue二维数组存储[node, pos]，其中pos是当前节点在满二叉树中的编号。for循环当前层，并且下一层入列
 *      下一层编号依据上一个层节点编号计算：左子树为 2 * pos，右子树为 2 * pos + 1。
 * 事件复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    let max = 0n;
    // bigint注意
    // 1. 永远不要把 BigInt 和 Number 放在同一个算式里
    // 2. BigInt 不能与 Math 对象的方法一起使用
    const queue = [[root, 1n]];
    while (queue.length) {
        const len = queue.length;
        const curWidth = len
            ? queue[queue.length - 1][1] - queue[0][1] + 1n
            : 1
        max = max > curWidth ? max : curWidth;
        for (let i = 0; i < len; i++) {
            // pos 当前节点的编号，它的子树编号计算：左子树为 2 * pos，右子树为 2 * pos + 1
            const [node, pos] = queue.shift();
            const left = node.left;
            const right = node.right;
            left && queue.push([left, 2n * pos]);
            right && queue.push([right, 2n * pos + 1n]);
        }
    }
    // 最后一步再转换为 Number，避免中途计算时溢出
    return Number(max);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = widthOfBinaryTree;
// @after-stub-for-debug-end