/*
 * @lc app=leetcode.cn id=3592 lang=javascript
 *
 * [3592] 硬币面值还原
 *
 * https://leetcode.cn/problems/inverse-coin-change/description/
 *
 * algorithms
 * Medium (65.92%)
 * Likes:    19
 * Dislikes: 0
 * Total Accepted:    3.3K
 * Total Submissions: 4.9K
 * Testcase Example:  '[0,1,0,2,0,3,0,4,0,5]'
 *
 * 给你一个 从 1 开始计数 的整数数组 numWays，其中 numWays[i] 表示使用某些 固定 面值的硬币（每种面值可以使用无限次）凑出总金额
 * i 的方法数。每种面值都是一个 正整数 ，并且其值 最多 为 numWays.length。
 * 
 * 然而，具体的硬币面值已经 丢失 。你的任务是还原出可能生成这个 numWays 数组的面值集合。
 * 
 * 返回一个按从小到大顺序排列的数组，其中包含所有可能的 唯一 整数面值。
 * 
 * 如果不存在这样的集合，返回一个 空 数组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入： numWays = [0,1,0,2,0,3,0,4,0,5]
 * 
 * 输出： [2,4,6]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 金额
 * 方法数
 * 解释
 * 
 * 
 * 1
 * 0
 * 无法用硬币凑出总金额 1。
 * 
 * 
 * 2
 * 1
 * 唯一的方法是 [2]。
 * 
 * 
 * 3
 * 0
 * 无法用硬币凑出总金额 3。
 * 
 * 
 * 4
 * 2
 * 可以用 [2, 2] 或 [4]。
 * 
 * 
 * 5
 * 0
 * 无法用硬币凑出总金额 5。
 * 
 * 
 * 6
 * 3
 * 可以用 [2, 2, 2]、[2, 4] 或 [6]。
 * 
 * 
 * 7
 * 0
 * 无法用硬币凑出总金额 7。
 * 
 * 
 * 8
 * 4
 * 可以用 [2, 2, 2, 2]、[2, 2, 4]、[2, 6] 或 [4, 4]。
 * 
 * 
 * 9
 * 0
 * 无法用硬币凑出总金额 9。
 * 
 * 
 * 10
 * 5
 * 可以用 [2, 2, 2, 2, 2]、[2, 2, 2, 4]、[2, 4, 4]、[2, 2, 6] 或 [4,
 * 6]。
 * 
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入： numWays = [1,2,2,3,4]
 * 
 * 输出： [1,2,5]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 金额
 * 方法数
 * 解释
 * 
 * 
 * 1
 * 1
 * 唯一的方法是 [1]。
 * 
 * 
 * 2
 * 2
 * 可以用 [1, 1] 或 [2]。
 * 
 * 
 * 3
 * 2
 * 可以用 [1, 1, 1] 或 [1, 2]。
 * 
 * 
 * 4
 * 3
 * 可以用 [1, 1, 1, 1]、[1, 1, 2] 或 [2, 2]。
 * 
 * 
 * 5
 * 4
 * 可以用 [1, 1, 1, 1, 1]、[1, 1, 1, 2]、[1, 2, 2] 或 [5]。
 * 
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入： numWays = [1,2,3,4,15]
 * 
 * 输出： []
 * 
 * 解释：
 * 
 * 没有任何面值集合可以生成该数组。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= numWays.length <= 100
 * 0 <= numWays[i] <= 2 * 10^8
 * 
 * 
 */

// @lc code=start
/**
 * 核心思想：组合数使用大数，入参使用map转为bigTarget，声明ways，其值也是大数，存储当前推理出的面值res组成的集合，
 *      首先遍历金额numWays.length，当前组合数<目标组合数，则采纳当前面值,并更新后面面值的组合数；
 *      最后，对比ways和目标的bigTarget是否一致，一致则证明面值推理正确
 * @param {number[]} numWays
 * @return {number[]}
 */
var findCoins = function (numWays) {
    const total = numWays.length;
    const ways = new Array(total + 1).fill(0n);
    const bigTarget = numWays.map(v => BigInt(v));
    ways[0] = 1n;
    const res = [];

    for (let i = 1; i <= total; i++) {
        const expected = bigTarget[i - 1];
        if (ways[i] > expected) {
            continue;
        }
        if (ways[i] < expected) {
            // 发现新加入的硬币，并更新后面面值的组合数
            res.push(i);
            for (let j = i; j <= total; j++) {
                ways[j] += ways[j - i];
            }
        }
    }
    // 用推理出的组合与目标做对比，如果完全一样则证明推理正确
    for (let coin of res) {
        for (let i = coin; i <= total; i++) {
            if (ways[i] !== bigTarget[i - 1]) return []
        }
    }
    return res;
};
// @lc code=end