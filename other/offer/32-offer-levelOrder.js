/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const res = [];
    const q = [root];
    while (q.length) {
        const n = q.shift(); // 借助队列 先进先出特性, 弹出节点,如果存在子左右节点就推入,但是优先弹出父的左右节点
        res.push(n.val);
        if (n.left) {
            q.push(n.left);
        }
        if (n.right) {
            q.push(n.right);
        }
    }
    return res;
};