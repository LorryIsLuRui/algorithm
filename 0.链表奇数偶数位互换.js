/**
 * 结合了 328. 奇偶链表 的拆分逻辑和 21. 合并两个有序链表 的指针操作。
 * 1. 完整题目描述题目名称：
 * 两条链表的奇偶位互换输入：链表 A：[1, 2, 3, 4],链表 B：[10, 20, 30, 40]
 *
 * 规则：所谓“位”，通常指节点的逻辑编号（从 1 开始计数）。
 * 将链表 A 的第 1, 3, 5... 个节点与链表 B 的第 2, 4, 6... 个节点进行互换位置。
 *
 * 输出：修改后的链表 A 和 链表 B。
 *
 * 示例：输入 A: [1, 2, 3, 4], B: [10, 20, 30, 40]
 * 互换 A 的奇数位 {1, 3} 和 B 的偶数位 {20, 40}
 * 结果 A: [20, 2, 40, 4], B: [10, 1, 30, 3]
 */
// 为了降低难度，最稳妥的做法是：先把 A 拆成“奇”、“偶”两条，把 B 也拆成“奇”、“偶”两条，然后交叉重新拼接。

const swapOddEven = (headA, headB) => {
    if (!headA || !headB) return [headA, headB];

    const splitList = (head) => {
        let odd = head; // 奇数位节点
        let even = head.next;
        while (even && even.next) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        // ！！！核心修正点 ！！！
        odd.next = null; // 必须断开奇数链表的尾部
        if (even) even.next = null; // 必须断开偶数链表的尾部
        return [head, head.next];
    };

    let [oddA, evenA] = splitList(headA);
    let [oddB, evenB] = splitList(headB);

    // 交叉拼接
    const mergeLists = (odd, even) => {
        let dummy = new ListNode(0);
        let current = dummy;
        while (odd || even) {
            if (odd) {
                current.next = odd;
                current = current.next;
                odd = odd.next;
            }
            if (even) {
                current.next = even;
                current = current.next;
                even = even.next;
            }
        }
        return dummy.next;
    };

    const newHeadA = mergeLists(oddB, evenA); // A 的奇数位来自 B，偶数位来自 A
    const newHeadB = mergeLists(oddA, evenB); // B 的奇数位来自 A，偶数位来自 B

    return [newHeadA, newHeadB];
};
