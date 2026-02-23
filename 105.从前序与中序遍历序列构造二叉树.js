/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (73.24%)
 * Likes:    2670
 * Dislikes: 0
 * Total Accepted:    989.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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
 * 核心思路：
 * 1. 使用中序构建map，key是节点值，value是节点在中序遍历中的索引
 * 2. 前序遍历的第一个元素是根节点
 * 3. 在中序中根据根节点划分左右子树，得到左子树宽度
 * 4. 递归构建左子树和右子树
 * 
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var buildTree = function (preorder, inorder) {
    const inOrderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inOrderMap.set(inorder[i], i);
    }

    const build = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const inRootIndex = inOrderMap.get(rootVal);
        const leftTreeSize = inRootIndex - inStart;
        /**
         * 
         * 左子树：

            前序起点：preStart + 1（跳过当前根）
            前序终点：preStart + leftTreeSize（根 + 左子树大小）
            中序起点：inStart（保持不变）
            中序终点：inRootIndex - 1（根的前一位）
        右子树：

            前序起点：preStart + leftTreeSize + 1（跳过根和整个左子树）
            前序终点：preEnd（保持不变）
            中序起点：inRootIndex + 1（根的后一位）
            中序终点：inEnd（保持不变）
         */
        root.left = build(preStart + 1, preStart + leftTreeSize, inStart, inRootIndex - 1);
        root.right = build(preStart + leftTreeSize + 1, preEnd, inRootIndex + 1, inEnd);

        return root;
    };

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end