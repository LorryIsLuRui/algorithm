/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (73.08%)
 * Likes:    1379
 * Dislikes: 0
 * Total Accepted:    520.6K
 * Total Submissions: 712.3K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
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
 * 核心思想：
 * 1. 使用中序构建map，key是节点值，value是节点在中序遍历中的索引
 * 2. 后序遍历的最后一个元素是根节点
 * 3. 在中序中根据根节点划分左右子树，得到左子树宽度
 * 4. 递归构建左子树和右子树
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var buildTree = function(inorder, postorder) {
    const inOrderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inOrderMap.set(inorder[i], i);
    }
    const build = (inLeft, inRight, postLeft, postRight) => {
        if (inLeft > inRight || postLeft > postRight) {
            return null;
        }
        const rootVal = postorder[postRight];
        const root = new TreeNode(rootVal);
        const rootIdxInInorder = inOrderMap.get(rootVal);
        const leftRootSize = rootIdxInInorder - inLeft;
        /**
         * 中序遍历：左子树 -> 根节点 -> 右子树
         * 后序遍历：左子树 -> 右子树 -> 根节点
         * 
         * 左子树：
         *      中序边界：inLeft -> rootIdxInInorder - 1
         *      后序边界：postLeft -> postLeft + leftRootSize - 1
         * 右子树：
         *      中序边界：rootIdxInInorder + 1 -> inRight
         *      后续边界：postLeft + leftRootSize -> postRight - 1 // 要减1，因为根节点在postRight
         */
        root.left = build(inLeft, rootIdxInInorder - 1, postLeft, postLeft + leftRootSize - 1);
        root.right = build(rootIdxInInorder + 1, inRight, postLeft + leftRootSize, postRight - 1);
        return root;
    };
    return build(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end