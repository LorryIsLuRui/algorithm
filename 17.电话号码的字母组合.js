/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (63.18%)
 * Likes:    3216
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.1M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * 当前字母入栈，递归下一个电话号，直到最后，所有可组合的字母都在temp栈里，最后一次时候字符串拼接
    每拼接完一个，出栈
    时间复杂度O(4^n) 空间复杂度最多O（n） + tempO(n)
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    const res = [];
    const temp = [];
    const fn = idx => {
        if (idx === digits.length) {
            res.push(temp.join(''));
            return;
        }
        const digit = digits[idx];
        const letters = phoneMap[digit];
        // 遍历当前电话号所有字母，
        for (let c of letters) {
            temp.push(c);
            fn(idx + 1);
            temp.pop()
        }
    }
    fn(0);
    return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end