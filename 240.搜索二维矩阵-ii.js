/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (50.02%)
 * Likes:    918
 * Dislikes: 0
 * Total Accepted:    230.3K
 * Total Submissions: 460.2K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n' +
  '5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 5
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 20
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * 每行的所有元素从左到右升序排列
 * 每列的所有元素从上到下升序排列
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分法 超时
// const search = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((right - left) / 2) + left;
//         if (nums[mid] === target) {
//             return mid;
//         }
//         if (nums[mid] > target) {
//             right = mid - 1;
//         }
//         if (nums[mid] < target) {
//             left = mid + 1;
//         }
//     }
//     return -1;
// };
// var searchMatrix = function (matrix, target) {
//     if (!matrix.length) return false;
//     for (let i = 0; i < matrix.length; i++) {
//         if (search(matrix[i], target) >= 0) {
//             return true;
//         }
//     }
//     return false;
// };

// Z字型查找
var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false;
    const row = matrix.length;
    const column = matrix[0].length;
    let x = 0;
    let y = column - 1;
    while (x < row && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }
        if (matrix[x][y] > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end
