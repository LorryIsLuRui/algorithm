/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (45.06%)
 * Likes:    3457
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 3.6M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 如果非空，则仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * 核心思路：纵向扫描
 * 1. 取第一个字符串作为参考
 * 2. 逐字符比较其他字符串对应位置的字符
 * 3. 一旦发现不匹配，返回当前匹配的前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // 以第一个字符串为基准
    const firstStr = strs[0];
    
    // 遍历第一个字符串的每个字符
    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];
        
        // 检查其他所有字符串在位置 i 是否有相同字符
        for (let j = 1; j < strs.length; j++) {
            // 如果某个字符串长度不够，或字符不匹配
            if (i === strs[j].length || strs[j][i] !== char) {
                return firstStr.substring(0, i);
            }
        }
    }
    
    // 第一个字符串就是公共前缀
    return firstStr;
};
// @lc code=end

