/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (41.92%)
 * Likes:    11210
 * Dislikes: 0
 * Total Accepted:    3.9M
 * Total Submissions: 9.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

// @lc code=start
/**
 * 核心： 滑动窗口 + 哈希表
 * 时间复杂度: O(n)
 * 空间复杂度: O(min(m,n)) m为字符集大小，n为字符串长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            left = Math.max(map.get(char) + 1, left);
        }
        map.set(char, i);
        maxLength = Math.max(maxLength, i - left + 1);
    }
    return maxLength;

    // if (s.length === 0) return 0;
    // let left = 0;
    // let right = 0;
    // let max = 0;
    // const map = new Map();
    // while (left < s.length && right < s.length) {
    //     const char = s[right];
    //     if (map.has(char)) {
    //         left = Math.max(left, map.get(char) + 1);
    //     }
    //     map.set(char, right);
    //     max = Math.max(max, right - left + 1);
    //     right++;
    // }
    // return max;
};
// @lc code=end

