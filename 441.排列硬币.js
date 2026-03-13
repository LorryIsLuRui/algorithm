/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 *
 * https://leetcode.cn/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (45.03%)
 * Likes:    325
 * Dislikes: 0
 * Total Accepted:    149.9K
 * Total Submissions: 332.8K
 * Testcase Example:  '5'
 *
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 * 
 * 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 5
 * 输出：2
 * 解释：因为第三行不完整，所以返回 2 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 8
 * 输出：3
 * 解释：因为第四行不完整，所以返回 3 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
// 等差数列求和:摆满k行所需的硬币总数 S = 1 + 2 + 3 + ... + k = k(k+1)/2
// 我们要找的是最大的整数 k，使得：k(k+1)/2 <= n
// 为什么用二分法：因为 k 的范围肯定在 1 到 n 之间，且随着 k 增大，所需的硬币数也单调递增，所以非常适合二分。
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    // 二分法
    let left = 1;
    let right = n;
    let res = 0;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2); // 区间内所有行数的中间值
        const cost = mid * (mid + 1) / 2; // 中间行需要消耗的硬币数量
        if (cost > n) {
            right = mid - 1;
        }
        if (cost <= n) {
            res = mid;
            left = mid + 1;
        }
    }
    return res;

    // 暴力法
    // if (n <= 1) return n;
    // let remain = n;
    // for (let i = 0; i < n; i++) {
    //     const curNeed = i + 1;
    //     remain -= curNeed;
    //     if (remain >= 0) {
    //         continue;
    //     }
    //     else {
    //         return i;
    //     }
    // }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = arrangeCoins;
// @after-stub-for-debug-end