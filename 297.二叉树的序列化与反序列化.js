/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// bfs
const sym = '$';
var serialize = function(root) {
    const q = [];
    let result = '';
    const cur = [root];
    while (cur.length) {
        const len = cur.filter(v => v.val !== sym).length;
        for (let i = 0; i < len; i++) {
            const node = cur.shift();
            result += node.val;
            if (node.left) {
                cur.push(node.left);
            } else {
                cur.push({val: sym});
            }
            if (node.right) {
                cur.push(node.right);
            } else {
                cur.push({val: sym});
            }
        }
        const len1 = cur.filter(v => v.val === sym).length;;
        for (let j = 0; j < len1; j++) {
            const val = cur.shift();
            result += val.val;
        }
    }
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const result = {};
    let root = {
        val: data[0]
    };
    data = data.slice(1).split('');
    let level = 2; // 2 level
    while (data.length) {
        const node = root.left;
        let val = data.shift();
        if (val !== sym) {
            root.left = val;
        }
        let val = data.shift();
        if (val !== sym) {
            root.right = val;
        }
        root = node;
        level += 1;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = serialize;
// @after-stub-for-debug-end