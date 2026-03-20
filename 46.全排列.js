/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (80.46%)
 * Likes:    3286
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * 时间复杂度O(n × n!) n!：全排列的总数（n 个元素的排列数是 n×(n-1)×...×1 = n!）
 * 空间n
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const fn = first => {
        if (first === nums.length) {
            res.push([...nums]);
        }
        // first位的值，组合结果是，first及其后所有值
        for (let i = first; i < nums.length; i++) {
            // 遍历的给first为填值
            [nums[first], nums[i]] = [nums[i], nums[first]];
            fn(first + 1);
            // push了，再修正回来
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    };
    fn(0);
    return res;
};
// permute([1,2,3])
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end