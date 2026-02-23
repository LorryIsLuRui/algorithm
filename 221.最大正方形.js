/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (48.80%)
 * Likes:    1127
 * Dislikes: 0
 * Total Accepted:    191.7K
 * Total Submissions: 392.7K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [["0"]]
 * 输出：0
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
 * matrix[i][j] 为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
const checkRight = (squ=[], lineNum=0, n=0,firstIdx=0, lastIdx=0, bian=0) => {
    let checkRow = lineNum;
    let res = true;
    while (checkRow < n) {
        const data = squ[checkRow].join('') || '';
        const str = data.substring(firstIdx, lastIdx).indexOf(0);
        res = str < 0; // 当前行相同位置是否包含0，只要有一个包含0(>-1)则不能形成正方形，退出
        if (!res) {
            break;
        }
        if (checkRow === bian) {
            return res;
        } else {
            checkRow += 1;
        }
    }
    return res;
};
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let ans = 0;
    const n = matrix.length;
    const column = matrix[0] ? matrix[0].length : 0;
    if (n === 1) {
        ans = matrix[0][0].toString().indexOf(1) > -1 ? 1 : 0
    }
    if (column === 1) {
        ans = matrix.some(val => +val[0] === 0) ? 1 : 0
    }
    if (n > 1 && column > 1) {
        for (let i = 0; i < matrix.length; i++) {
            const curLine = matrix[i];
            let start = 1;
            let end = column;
            while (start < end) {
                if (+curLine[start] === 0) {
                    start += 1;
                    continue;
                }
                const lineStr = curLine.join('').slice(start, end);
                if (lineStr.indexOf('0') > -1) {
                    start += 1;
                    continue;
                }
                const firstIdx = lineStr.indexOf(1);
                const lastIdx = lineStr.lastIndexOf(1);
                if (firstIdx < lastIdx) {
                    const len = lastIdx - firstIdx;
                    let bian = len + 1;
                    let res = checkRight(matrix, i + 1, n, firstIdx, lastIdx, bian);
                    if (res && bian <= (n - i)) {
                        ans = Math.max(ans, bian * 2);
                    }
                }
                start += 1;
                
            }
        }
    }
    return ans;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maximalSquare;
// @after-stub-for-debug-end