/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
const isRepeat = str => [...new Set(str.split(''))].length != str.length
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if (len === 0) return 0;
    if (len > Math.pow(10, 4) * 5 ) return 0;
    let res = 0;
    // let left = -1;
    let left = 0;
    const occ = new Set();
    // for (let i = 0; i < len; i++) {
    //     if (i != 0) {
    //         occ.delete(s.charAt(i - 1));
    //     }
    //     while (left + 1 < len && !occ.has(s.charAt(left + 1))) {
    //         occ.add(s.charAt(left + 1));
    //         left++;
    //     }
    //     res = Math.max(res, left - i + 1);
    // }
    for (let i = 0; i < s.length; i++) {
        if (!occ.has(s[i])) {
            occ.add(s[i])
            res = Math.max(res, occ.size);
        } else {
            // 有重复字符 则set开始清空 重新寻找无重复子串
            // 需要遍历清空，否则指针i无法移到正确的位置
                // 不能使用
                occ.clear();
            // while (occ.has(s[i])) {
            //     occ.delete(s[left]);
            //     left++
            // }
            occ.add(s[i]);
        }
        
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end