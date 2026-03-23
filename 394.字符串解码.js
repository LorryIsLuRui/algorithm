/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode.cn/problems/decode-string/description/
 *
 * algorithms
 * Medium (61.09%)
 * Likes:    2121
 * Dislikes: 0
 * Total Accepted:    559K
 * Total Submissions: 914.7K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 测试用例保证输出的长度不会超过 10^5。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 30
 * s 由小写英文字母、数字和方括号 '[]' 组成
 * s 保证是一个 有效 的输入。
 * s 中所有整数的取值范围为 [1, 300] 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const recurse = (i) => {
        let res = '', num = 0;
        while (i < s.length && s[i] !== ']') {
            if (/\d/.test(s[i])) num = num * 10 + Number(s[i++]);
            else if (s[i] === '[') {
                const [inner, next] = recurse(i + 1);
                res += inner.repeat(num);
                num = 0
                i = next;
            } else {
                res += s[i++];
            }
        }
        return [res, i + 1];
    }
    return recurse(0)[0];
};
// decodeString("2[abc]3[cd]ef")
// decodeString("3[a2[c]]")
// @lc code=end

// 太长了！！！
var decodeString_stack = function(s) {
    const temp = [];
    let curNum = '';
    let res = '';
    const dfs = (start = 0) => {
        if (start === s.length) {
            return;
        }
        
        for (let i = start; i < s.length; i++) {
            const char = s[i];
            if (char >= '0' && char <= '9') {
                curNum += char
            }
            if (char === '[') {
                temp.push([+curNum, '']);
                curNum = '';
            }
            if (char === ']') {
                const [num, str] = temp.pop();
                const curStr = str.repeat(num);
                if (temp.length > 0) {
                    const top = temp.length - 1;
                    temp[top][1] = temp[top][1] + curStr;
                } else {
                    res =  res + curStr;
                }
            }
            if (/[a-z]/.test(char)) {
                if (temp.length) {
                    const top = temp.length - 1;
                    temp[top][1] = temp[top][1] + char;
                } else {
                    res += char;
                }
            }
        }
    }
    dfs();
    return res;
};

// @after-stub-for-debug-begin
module.exports = decodeString;
// @after-stub-for-debug-end