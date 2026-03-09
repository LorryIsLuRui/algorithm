/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 核心思路：递归，如果当前节点是p或者q，则返回当前节点；否则分别在左右子树中寻找p和q，如果左右子树都找到了，则说明当前节点是最近公共祖先；如果只有一边找到了，则说明最近公共祖先在这一边。
 * 时间复杂度：O(n)，空间复杂度：O(n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
}
/**
 * 核心思路：1.遍历root，map存储所有节点的父节点，
 * 2.遍历p以及向上的父节点，存储在set
 * 3.遍历q以及向上的父节点，判断是否在set中，如果在则返回当前节点
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */
// var lowestCommonAncestor1 = function(root, p, q) {
//     if (!root) return null;
//     const map = new Map();
//     const dfs = node => {
//         if (node.left) {
//             map.set(node.left, node);
//             dfs(node.left);
//         }
//         if (node.right) {
//             map.set(node.right, node);
//             dfs(node.right);
//         }
//     }
//     // 记录每个节点的父节点
//     dfs(root);
//     const set = new Set();
//     while (p) {
//         set.add(p);
//         // 向p的父节点移动，存储
//         p = map.get(p);
//     }
//     while (q) {
//         // 向q的父节点移动，判断是否在p的父节点集合中
//         if (set.has(q)) {
//             return q;
//         }
//         q = map.get(q);
//     }
//     return null;
//     // return lowestCommonAncestor(root, p, q);
// };



// @lc code=end
