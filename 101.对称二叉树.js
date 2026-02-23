/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
const checkSymmetric = res => {
    const isEmpty = res.filter(val => val > -100 && val < 100).length === 0;
    if (isEmpty) return true;
    while (res.length) {
        const front = res.shift();
        const end = res.pop();
        if (front !== end) {
            return false;
        }
    }
    return true;
};
var isSymmetric = function(root) {
    let result = true;
    let curLevelVal = [];
    let q = [];
    q.push(root);
    while (q.length > 0) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const node = q.shift();
            curLevelVal.push(node?.left?.val);
            curLevelVal.push(node?.right?.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        if (checkSymmetric(curLevelVal)) {
            curLevelVal = [];
        } else {
            return false;
        }
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end