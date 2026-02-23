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
// TODO: https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
const check = (B, dest) => {
    if (B && dest) {
        if (!B.left && !B.right && !dest.left && !dest.right) {
            if (B.val === dest.val) {
                return true;
            } else return false;
        }
        return (B.left ? check(B?.left, dest?.left) : B.val === dest.val)
            && (B.right ? check(B?.right, dest?.right) : B.val === dest.val);
    }
    return false;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (!B) return false;
    const q = [A];
    while (q.length) {
        const node = q.shift();
        if (node.val === B.val) {
           const res = check(B, node);
            if (res) {
                return res;
            }
        }
        if (node.left) {
            q.push(node.left)
        }
        if (node.right) {
            q.push(node.right)
        }
    }
    return false;
};
const a = createTree([4,2,3,4,5,6,7,8,9]);
const b = createTree([4, 8, 9]);
// const a = createTree([10,12,6,8,3,11]);
// const b = createTree([10,12,6,8]);
// const a = createTree([1,0,1,-4,-3]);
// const b = createTree([1,-4]);
// const a = createTree([-2, -1]);
// const b = createTree([-2, 1,-2]);
// const a = createTree([-2,1,1,-2,1,1]);
// const b = createTree([-2,1,1,-2,1,2]);
// const a = createTree([1, 3, 2, 4]);
// const b = createTree([3, 4]);
// const a = createTree([-2,1,-1]);
// const b = createTree([-2,1,1]);
isSubStructure(a, b);



