
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
        Nodes.push(node.left = new Node (arr[i]))
        i += 1
        if (i == arr.length) return tree
        Nodes.push(node.right = new Node(arr[i]))
        i += 1
        if (i == arr.length) return tree
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const q = [[root]];
    const res = [];
    let flag = true; // 顺序  false-逆序
    while (q.length) {
        const currLevelList = q.shift();
        const currVal = [];
        const childs = [];
        while (currLevelList.length) { // 遍历当前层
            let node = null;
            node = currLevelList.shift();
            if (flag) {
                currVal.push(node.val); // 顺序先进先出
            } else {
                currVal.unshift(node.val); // 逆序后进先出
            }
            if (node.left) {
                childs.push(node.left);
            }
            if (node.right) {
                childs.push(node.right);
            }
        }
        res.push(currVal);
        childs.length > 0 ? q.push(childs) : null;
        flag = !flag; // 通过改变flag,实现顺逆交替
    }
    return res;
};
head = createTree([3,9,20,null,null,15,7])
levelOrder(head);