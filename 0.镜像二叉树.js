var mirrorTreeDfs = function (root) {
    if (!root) return null;
    const left = mirrorTreeDfs(root.left);
    const right = mirrorTreeDfs(root.right);
    root.left = right;
    root.right = left;
    return root;
};
const mirrorTreeBfs = function (root) {
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        const level = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            [node.left, node.right] = [node.right, node.left];
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return root;
};
