/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (48.68%)
 * Likes:    3483
 * Dislikes: 0
 * Total Accepted:    983.4K
 * Total Submissions: 2M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t
 * 中的每一个字符（包括重复字符）。如果没有这样的子串，返回空字符串 ""。
 * 
 * 测试用例保证答案唯一。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 O(m + n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 记录t中每个字符需要的数量
    const need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }
    
    // 窗口中每个字符的数量
    const window = new Map();
    
    let left = 0, right = 0;
    let valid = 0; // 窗口中满足need条件的字符种类数
    
    // 记录最小覆盖子串的起始位置和长度
    let start = 0, len = Infinity;
    
    while (right < s.length) {
        // 扩大窗口
        const c = s[right];
        right++;
        
        // 更新窗口数据
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        
        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            
            // 缩小窗口
            const d = s[left];
            left++;
            
            // 更新窗口数据
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    
    // 返回最小覆盖子串
    return len === Infinity ? "" : s.substr(start, len);
};
// @lc code=end

