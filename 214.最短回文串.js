/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 *
 * https://leetcode.cn/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (40.89%)
 * Likes:    639
 * Dislikes: 0
 * Total Accepted:    59.7K
 * Total Submissions: 146.1K
 * Testcase Example:  '"aacecaaa"'
 *
 * 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aacecaaa"
 * 输出："aaacecaaa"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd"
 * 输出："dcbabcd"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 实现思路: KMP算法
 * 1. 构造字符串 str = s + '#' + reverse(s)
 * 2. 计算 str 的最长前缀后缀数组 lps
 * 3. lps 最后一个值表示 s 的最长回文前缀的长度
 * 4. 将 s 中不属于回文前缀的部分反转后添加到 s 前面
 */
var shortestPalindrome = function (s) {
    const rev = s.split('').reverse().join('');
    const str = s + '#' + rev;

    const lps = Array(str.length).fill(0);

    for (let i = 1; i < str.length; i++) {
        let j = lps[i - 1];
        while (j > 0 && str[i] !== str[j]) {
            j = lps[j - 1];
        }
        if (str[i] === str[j]) {
            j++;
        }
        lps[i] = j;
    }

    const add = rev.slice(0, s.length - lps[str.length - 1]);
    const res = add + s;
    console.log(`最短回文串: "${res}"`);
    return res;
};
// @lc code=end
shortestPalindrome('aacecaaa');
// shortestPalindrome('ababaca');
