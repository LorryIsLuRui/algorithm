/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.60%)
 * Likes:    1868
 * Dislikes: 0
 * Total Accepted:    925.8K
 * Total Submissions: 1.7M
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/** 核心思想：字母的索引值0,1,2 是字母a,b,c的出现次数
 * 1. 先构建目标字符串的数组
 * 2. 构建第一个窗口的数组 如果满足 记录索引
 * 3. 开始滑动窗口while循环，每一次left索引下标的字符数-1，left++，right索引下标的字符数+1，right++
 * 4. 检查当前cur是否满足条件，满足就记录索引
 * 时间复杂度: O(n) n为字符串s的长度
 * 空间复杂度: O(1) 因为字符集固定为26个小写字母，所以空间复杂度为常数级别
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const tarLen = p.length;
    let left = 0;
    let right = 0;
    const res = [];
    // 26个字母总数，索引是字母的code值，0-a, 1-b, 2-c ... 25-z
    let cur = new Array(26).fill(0);
    const tarCharIdxList = new Array(26).fill(0);
    const arrayEqual = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < p.length; i++) {
        const charCodeIdx = p[i].charCodeAt(0) - 97;
        tarCharIdxList[charCodeIdx]++;
    }
    // 先构建第一个窗口
    while (right < tarLen && right < s.length) {
        const charCodeIdx = s[right].charCodeAt(0) - 97;
        cur[charCodeIdx]++;
        right++;
    }
    
    // 检查第一个窗口
    if (right - left === tarLen && arrayEqual(cur, tarCharIdxList)) {
        res.push(left);
    }
    
    // 滑动窗口：每次移动一位
    while (right < s.length) {
        // 移除左边字符
        const leftCharIdx = s[left].charCodeAt(0) - 97;
        cur[leftCharIdx]--;
        left++;
        
        // 添加右边字符
        const rightCharIdx = s[right].charCodeAt(0) - 97;
        cur[rightCharIdx]++;
        right++;
        
        // 检查当前窗口
        if (arrayEqual(cur, tarCharIdxList)) {
            res.push(left);
        }
    }
    return res;
};
// @lc code=end
// findAnagrams("cbaebabacd", "abc");
// findAnagrams("baa", "aa");

// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end