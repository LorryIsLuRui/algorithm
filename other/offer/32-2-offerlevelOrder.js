/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
    const q = [[root]];
    const res = [];
    while (q.length) {
        const currLevelList = q.shift();
        const currVal = [];
        const childs = [];
        while (currLevelList.length) { // 遍历当前层
            const node = currLevelList.shift();
            currVal.push(node.val);
            if (node.left) {
                childs.push(node.left);
            }
            if (node.right) {
                childs.push(node.right);
            }
        }
        res.push(currVal);
        childs.length > 0 ? q.push(childs) : null;
    }
    return res;
};