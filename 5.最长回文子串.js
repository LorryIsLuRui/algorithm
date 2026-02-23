/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (40.29%)
 * Likes:    7943
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 5.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */

// 思路: 中心扩展法, 以每个字符为中心向两边扩展, 分奇数和偶数两种情况，记录最长回文子串，更新最大长度和起始位置

// @lc code=start
/**
 * 时间复杂度: O(n^2)，其中 n 是字符串 s 的长度。对于每个字符，我们可能需要向两边扩展，最坏情况下需要遍历整个字符串。
 * 空间复杂度: O(1)，我们只使用了常数级别的额外空间来存储变量 start 和 maxLength。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    
    let start = 0;  // 记录最长回文子串的起始位置
    let maxLength = 1;  // 记录最长回文子串的长度
    
    // 从中心向两边扩展的辅助函数
    const expandAroundCenter = (left, right) => {
        // 当左右指针在范围内且字符相等时，继续扩展
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // 返回回文子串的长度（注意left和right已经越界了，所以是right - left - 1）
        return right - left - 1;
    };
    
    // 遍历每个可能的中心点
    for (let i = 0; i < s.length; i++) {
        // 情况1: 奇数长度回文串，以i为中心
        const len1 = expandAroundCenter(i, i);
        // 情况2: 偶数长度回文串，以i和i+1之间为中心
        const len2 = expandAroundCenter(i, i + 1);
        
        // 取两种情况中的较大值
        const len = Math.max(len1, len2);
        
        // 如果当前回文串比之前记录的更长，更新起始位置和最大长度
        if (len > maxLength) {
            // 计算起始位置：中心点i - (长度-1)/2
            start = i - Math.floor((len - 1) / 2);
            maxLength = len;
        }
    }
    
    const result = s.slice(start, start + maxLength);
    console.log('最长回文子串为:', result, '长度为:', maxLength);
    return result;
};
// @lc code=end

// console.log('\n=== 测试1: 奇数长度回文 "babad" ===');
// longestPalindrome("babad");

// console.log('\n=== 测试2: 偶数长度回文 "cbbd" ===');
// longestPalindrome("cbbd");

// console.log('\n=== 测试3: 偶数长度回文 "cbaabd" ===');
// longestPalindrome("cbaabd");

// console.log('\n=== 测试4: 奇数长度回文 "racecar" ===');
// longestPalindrome("racecar");
console.log('\n=== 测试5: 同时包含奇数和偶数回文 "abaccba" ===');
longestPalindrome("abaccba");