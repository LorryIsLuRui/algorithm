/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (45.38%)
 * Likes:    4889
 * Dislikes: 0
 * Total Accepted:    2.4M
 * Total Submissions: 5.4M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([])"
 * 
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "([)]"
 * 
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [s[0]];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 1; i < s.length; i++) {
        const char = s[i];
        const prev = stack[stack.length - 1];
        if (map[prev] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
// @lc code=end

