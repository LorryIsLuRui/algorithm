/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (54.65%)
 * Likes:    2043
 * Dislikes: 0
 * Total Accepted:    898.1K
 * Total Submissions: 1.6M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/** 核心思路：使用四个指针来维护当前的边界，依次遍历四条边界，并更新边界指针
 * 时间复杂度：O(m*n)，每个元素访问一次
 * 空间复杂度：O(1)，除了输出数组外，使用常数空间
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];

    const result = [];
    let top = 0;              // 上边界
    let bottom = matrix.length - 1;  // 下边界
    let left = 0;             // 左边界
    let right = matrix[0].length - 1; // 右边界

    while (top <= bottom && left <= right) {
        // 从左到右遍历上边界
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // 从上到下遍历右边界
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // 防止单行矩阵重复遍历 [[1,2,3]]
        if (top <= bottom) {
            // 从右往左遍历下边界
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 防止单列矩阵重复遍历 [[1],[2],[3]]
        if (left <= right) {
            // 从下往上遍历左边界
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end