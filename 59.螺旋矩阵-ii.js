/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (69.79%)
 * Likes:    1529
 * Dislikes: 0
 * Total Accepted:    601.4K
 * Total Submissions: 861.9K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * 核心思想：模拟螺旋遍历的过程，使用四个指针维护当前的边界，依次给cur+1填充矩阵
 * 时间复杂度：O(n^2)。size=n*n，每个元素访问一次
 * 空间复杂度：O(1)，除了输出矩阵外，使用常数空间
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let cur = 1;
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (cur <= n * n) {
        // 从左往右遍历上边界
        for (let i = left; i <= right; i++) {
            matrix[top][i] = cur++;
        }
        top++;
        for (let i=top; i<=bottom;i++) {
            matrix[i][right] = cur++;
        }
        right--;
        for (let i=right; i>=left;i--) {
            matrix[bottom][i] = cur++;
        }
        bottom--;
        for (let i=bottom; i>=top;i--) {
            matrix[i][left] = cur++;
        }
        left++;
    }
    return matrix;
};
// @lc code=end

