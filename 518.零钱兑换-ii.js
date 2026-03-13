/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 *
 * https://leetcode.cn/problems/coin-change-ii/description/
 *
 * algorithms
 * Medium (66.73%)
 * Likes:    1466
 * Dislikes: 0
 * Total Accepted:    450.8K
 * Total Submissions: 676.9K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 * 
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 * 
 * 假设每一种面额的硬币有无限个。 
 * 
 * 题目数据保证结果符合 32 位带符号整数。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：amount = 5, coins = [1, 2, 5]
 * 输出：4
 * 解释：有四种方式可以凑成总金额：
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：amount = 3, coins = [2]
 * 输出：0
 * 解释：只用面额 2 的硬币不能凑成总金额 3 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：amount = 10, coins = [10] 
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * coins 中的所有值 互不相同
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * 核心思想：动规 双层for，dp[i]=xx指硬币和为i的组合数是x, 外层for遍历硬币集合，内层for遍历i=coin->amount区间，当前组合数=上一轮金额为i的组合数+使用当前coin所剩下缺口的组合数dp[i-coin]
 * 时间复杂度：双层for O(i*amount)
 * 空间复杂度：O(amount)
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            // 上一轮的 dp[i]：代表“只用之前的硬币，凑成 i 有多少种方法”。
            // dp[i - coin]：代表“用了当前这枚硬币后，剩下的缺口 i - coin 有多少种凑法”。
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = change;
// @after-stub-for-debug-end