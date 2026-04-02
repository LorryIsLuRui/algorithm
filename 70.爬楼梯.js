/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (55.58%)
 * Likes:    4039
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 3.9M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
/**
 * 动态规划 o(n) o(1)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let preOne = 0; // 前一个台阶方法数
    let preTwo = 0; // 前前一个台阶方法数
    let current = 1; // 当前台阶方法数，初始为1（爬0阶的方法数）,每次能爬1/2阶，所以每一阶可能的方法有：1.前一阶爬一个 2.前两阶爬两个
    for (let i = 1; i <= n; i++) {
        preTwo = preOne;
        preOne = current;
        current = preOne + preTwo;
    }
    return current;
};
// @lc code=end
