/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 *
 * https://leetcode.cn/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (71.50%)
 * Likes:    1327
 * Dislikes: 0
 * Total Accepted:    712.8K
 * Total Submissions: 996.7K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 * 
 * 
 */

// @lc code=start
/**
 * [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 时间复杂度：O(m*n)，需要遍历整个矩阵两次
 * 空间复杂度：O(1)，使用常数空间来标记需要置零的行和列
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 最优解，借用第0行和第0列作为标记
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false; // 标记第0行是否需要置零
    let firstColZero = false; // 标记第0列是否需要置零
    // O(m+n)： 1-1 和 1-2 记录第0行和第0列是否需要置零
    // 1-1 O(n) 检查第0行是否有零
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // 1-2 O(m) 检查第0列是否有零
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // 2 O(m*n) 使用第0行和第0列作为标记
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // 3 O(m*n) 根据标记置零
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 4 O(m+n) 根据第0行和第0列的标记，决定是否置零第0行和第0列
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = setZeroes;
// @after-stub-for-debug-end
// --------------------my bad code --------------------
// 时间复杂度O（m^2 * n^2） - 超出时间限制
// 空间复杂度O(1)
// let m = matrix.length;
// let n = matrix[0].length;
// const fn = (x, y) => {
//     if (matrix[x][y] !== 0) return;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if ((i === x || j === y) && matrix[i][j] !== 0) {
//                 matrix[i][j] = true;
//             }
//         }
//     }
// }
// let j = 0;
// while (j < n) {
//     for (let i = 0; i < m; i++) {
//         fn(i, j);
//     }
//     j++;
// }
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         if (matrix[i][j] === true) {
//             matrix[i][j] = 0;
//         }
//     }
// }
// return matrix;
