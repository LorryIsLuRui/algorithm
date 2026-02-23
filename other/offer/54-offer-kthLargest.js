/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 class Node { // 定义节点
    constructor(data){
        this.val = data
        this.left = null
        this.right = null
    }
}

const createTree = (arr) => { // 创建二叉树
    let tree = new Node(arr[0])
    let Nodes = [tree]
    let i = 1
    for (let node of Nodes){
        const res1 = new Node (arr[i]);
        if (arr[i]) {
            node.left = res1;
        }
        Nodes.push(res1)
        i += 1
        if (i == arr.length) return tree
        const res2 = new Node (arr[i]);
        if (arr[i]) {
            node.right = res2;
        }
        Nodes.push(res2)
        i += 1
        if (i == arr.length) return tree
    }
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// const deep = () => {

// };
// while循环
// 二叉搜索树的中序遍历结果是递增

var kthLargest = function(root, k) {
    let res = 0;
    const deep = (node) => {
        if (!node || k < 0) return null;
        if (node.right) {
            deep(node.right);
        }
        k--;
        if (k === 0) {
            return res = node.val;;
        }
        if (node.left) {
            deep(node.left);
        }
    };
    deep(root);
    return res;
};
// const a = createTree([3,1,4,null,2]); // 4
// const idx = 1
// kthLargest(a, 1)
const a = createTree([5,3,6,2,4,null,null,1]); // 4
const idx = 3
kthLargest(a, idx)