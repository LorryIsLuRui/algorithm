/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 *
 * https://leetcode.cn/problems/partition-labels/description/
 *
 * algorithms
 * Medium (79.00%)
 * Likes:    1411
 * Dislikes: 0
 * Total Accepted:    490.2K
 * Total Submissions: 620.6K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 "ababcc" 能够被分为 ["abab",
 * "cc"]，但类似 ["aba", "bcc"] 或 ["ab", "ab", "cc"] 的划分是非法的。
 *
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 *
 * 返回一个表示每个字符串片段的长度的列表。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
 *
 * 示例 2：
 *
 *
 * 输入：s = "eccbbbbdec"
 * 输出：[10]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 500
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * 核心思路：贪心算法
 * o(n)  O(∣Σ∣)
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const last = new Array(26);
    const length = s.length;
    const codePointA = 'a'.codePointAt(0);
    for (let i = 0; i < length; i++) {
        // 每个字母最后一次出现的索引
        last[s.codePointAt(i) - codePointA] = i;
    }
    const ans = [];
    let end = 0;
    let start = 0;
    for (let i = 0; i < length; i++) {
        // 有更大的索引 说明这个字母还会在后面出现，所以更新end，保证只在一个片段中
        end = Math.max(end, last[s.codePointAt(i) - codePointA]);
        if (i === end) {
            ans.push(end - start + 1);
            start = end + 1;
        }
    }
    return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = partitionLabels;
// @after-stub-for-debug-end
