/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 *
 * https://leetcode.cn/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (57.30%)
 * Likes:    33
 * Dislikes: 0
 * Total Accepted:    30.6K
 * Total Submissions: 53.2K
 * Testcase Example:  '987'
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 987
 * 输出："987"
 *
 *
 * 示例 2：
 *
 * 输入：n = 1234
 * 输出："1.234"
 *
 *
 * 示例 3：
 *
 * 输入：n = 123456789
 * 输出："123.456.789"
 *
 *
 * 示例 4：
 *
 * 输入：n = 0
 * 输出："0"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n < 2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    if (n === 0) return '0';

    // !最佳解法： 数组头插法：使用数组push,时间复杂度O(logN),空间复杂度O(logN)
    const str = n.toString();
    let count = 0;
    const res = [];
    for (let i = str.length - 1; i >= 0; i--) {
        count++;
        if (count === 4) {
            res.push('.');
            count = 1;
        }
        res.push(str[i]);
    }
    return res.reverse().join(''); // O(logN)
    // 从最低位，数位分离,时间复杂度O(logN),空间复杂度O(logN)
    //   理论循环次数为 O(logN)，但由于 JavaScript 字符串不可变，前置拼接会产生复制开销，严格分析可达到 O((logN)²)。
    // let res = '';
    // while (n > 0) {
    //     let part = n % 1000;
    //     n = Math.floor(n / 1000);
    //     if (n > 0) {
    //         res = '.' + String(part).padStart(3, '0') + res;
    //     } else {
    //         res = String(part) + res;
    //     }
    // }
    // return res;
    // 正则：O(logN)
    // return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // 字符串头插法：时间复杂度O(logN^2),空间复杂度O(logN)
    // const str = n.toString();
    // let count = 0;
    // let result = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     count++;
    //     if (count === 4) {
    //         result = '.' + result;
    //         count = 1;
    //     }
    //     result = str[i] + result; // 头插,每次都会复制整个字符串。最好用数组push,O(1),最后再join
    // }
    // return result;
};
// @lc code=end
thousandSeparator(1234);
