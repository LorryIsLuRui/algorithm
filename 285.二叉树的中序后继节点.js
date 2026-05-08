/**
 * 二叉树的中序后继节点 付费
 * https://leetcode.cn/problems/inorder-successor-in-bst-lcci/
 * 
 * 完整的题目描述
    题目名称：给定二叉树中的一个节点，请找出该节点在中序遍历序列中的下一个节点（后继节点）。

    输入条件：

    一个二叉树的节点 Node。

    该节点结构定义如下：

    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
            this.parent = null; // 关键：指向父节点的指针
        }
    }
    输出要求：返回该节点的下一个节点，如果该节点已经是中序遍历的最后一个，则返回 null。
 */
// 有parent
var inorderSuccessor = function (node) {
    if (!node) return null;

    if (node.right) {
        // 如果节点有右子树，那么后继节点就是右子树中最左边的节点
        let res = node.right;
        while (res.left) {
            res = res.left;
        }
        return res;
    }

    while (node.parent) {
        if (node === node.parent.left) {
            // 左树遍历完 回到父节点，即后继节点 （中序遍历：左-根-右）
            return node.parent;
        }
        node = node.parent;
    }
    return null;
};

// 无parent，二叉搜索树,在 BST 中，左子树 < 根 < 右子树。
var inorderSuccessor = function (root, p) {
    let successor = null;
    while (root) {
        if (p.val < root.val) {
            successor = root; // 记录当前节点为潜在后继节点
            root = root.left; // 向左子树继续搜索
        } else {
            root = root.right; // 向右子树继续搜索
        }
    }
    return successor;
};
// 无parent，普通二叉树，使用中序遍历，记录上一个访问的节点，如果上一个访问的节点是目标节点，那么当前访问的节点就是后继节点。
var inorderSuccessor = function (root, p) {
    let successor = null;
    let prev = null;
    // 递归
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        if (prev === p) {
            successor = node;
            return;
        }
        prev = node;
        traverse(node.right);
    };
    traverse(root);
    return successor;
    // 栈
    // const stack = [];
    // while (stack.length || root) {
    //     while (root) {
    //         stack.push(root);
    //         root = root.left;
    //     }
    //     root = stack.pop();
    //     if (prev === p) {
    //         successor = root;
    //         break;
    //     }
    //     prev = root;
    //     root = root.right;
    // }
    // return successor;
};
