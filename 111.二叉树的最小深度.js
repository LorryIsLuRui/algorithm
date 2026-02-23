/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
// 深度优先遍历 中序遍历
const childName = {
    left: 'left',
    right: 'right'
};
const childsDepthNum = {
    [childName.left]: '0',
    [childName.right]: '1'
}
const isLeft = name => name === childName.left;
var minDepth = function(root) {
    if (!root) return 0;
    const q = [root];
    let whichChild = root.left ? childName.left : childName.right;
    const isLeftChild = isLeft(whichChild);
    let depthNum = [0, isLeftChild && root.right ? 1 : 0];
    while (q.length) {
        let root = q.pop();
        let node = root;
        while(node) {
            if (node) {
                depthNum[childsDepthNum[whichChild]] += 1;
                const curIsLeftChild = isLeft(whichChild);
                if (curIsLeftChild && node.left) {
                    whichChild = childName.left;
                    node = node.left;
                }
                else if (curIsLeftChild && !node.left && node.right) {
                    whichChild = childName.right;
                    node = node.right
                }
                else if (!curIsLeftChild && node.right) {
                    whichChild = childName.right;
                    node = node.right;
                }
                else if (!curIsLeftChild && !node.right && node.left) {
                    whichChild = childName.left;
                    node = node.left
                }
                else {
                    node = null;
                }
            } else {
                node = null;
            }
        }
        whichChild = isLeftChild ? childName.right : childName.left;
        node = root[whichChild];
        if (node) {
            q.push(node);
        }
    }
    return Math.min(...depthNum) === 0 ? Math.max(...depthNum) : Math.min(...depthNum);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minDepth;
// @after-stub-for-debug-end