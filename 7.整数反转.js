/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode.cn/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (35.64%)
 * Likes:    4147
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 4M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
/**
 * 核心思想：将整数转换为字符串，逐位反转字符串，再转换回整数
 * 时间复杂度 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString();
    let isNegative = false;
    
    // 处理负号
    if (str[0] === '-') {
        isNegative = true;
        str = str.slice(1);
    }
    let newStr = '';
    
    while (str.length) {
        const len = str.length;
        newStr += str[len-1];
        str = str.slice(0, len - 1);
    }
    console.log('反转后字符串为:', newStr);

    let reversedNum = parseInt(newStr, 10);
    if (isNegative) {
        reversedNum = -reversedNum;
    }

    // 检查是否在32位有符号整数范围内
    if (reversedNum < -(2 ** 31) || reversedNum > 2 ** 31 - 1) {
        return 0;
    }
    
    console.log('反转后整数为:', reversedNum);
    return reversedNum;
};
reverse(-123);
// @lc code=end

