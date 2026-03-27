/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 *
 * https://leetcode.cn/problems/word-break/description/
 *
 * algorithms
 * Medium (59.70%)
 * Likes:    2938
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.7M
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
 * 注意，你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s 和 wordDict[i] 仅由小写英文字母组成
 * wordDict 中的所有字符串 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 动态规划
var wordBreak = function (s, wordDict) {
    const n = s.length;
    const word = new Set(wordDict);
    // dp[i] 表示 s[0:i] 能否分割。枚举分割点 j，若 dp[j] 为真且 s[j:i] 在字典里，则 dp[i] = true。
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // 空串0:0 可以分割

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const str = s.slice(j, i);
            if (dp[j] && word.has(str)) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}
var wordBreak_dfs = function (s, wordDict) {
    const word = new Set(wordDict);
    const memo = new Map();  // memo[i] = 从位置 i 开始能否成功分割
    const dfs = start => {
        if (start === s.length) return true;
        if (memo.has(start)) return memo.get(start);

        for (let i = start + 1; i <= s.length; i++) {
            const str = s.slice(start, i);
            // 每次加一个字符，试图拆分，递归下一个点
            if (word.has(str) && dfs(i)) {
                memo.set(start, true);
                return true
            }
        }
        memo.set(start, false);
        return false;
    }
    return dfs(0);
};
// console.log(wordBreak("aaaaaaa",["aaaa", "aaa"]))
// console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]))
// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordBreak;
// @after-stub-for-debug-end