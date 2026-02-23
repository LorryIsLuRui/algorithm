/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode.cn/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (72.46%)
 * Likes:    1899
 * Dislikes: 0
 * Total Accepted:    908.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const row = grid.length;
    const column = grid[0].length;
    const dp = Array.from({ length: row }, () => Array(column).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            }
            if (i > 0 && j > 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
            if (i === 0 && j > 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            }
            if (i > 0 && j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            }
        }
    }
    return dp[row - 1][column - 1];
};
// @lc code=end

