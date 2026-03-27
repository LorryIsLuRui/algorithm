/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (47.39%)
 * Likes:    2657
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.5M
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 示例 2：
 *
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 *
 *
 */

// @lc code=start
/**
 * 子串 子数组 滑动窗口，右指针不断移动，找到满足条件时 左指针尝试右移缩小宽度
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let min = Infinity;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return min === Infinity ? 0 : min;
};
// minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
// minSubArrayLen(4, [1, 4, 4]);
// minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
// minSubArrayLen(80, [10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8]);
// @lc code=end

// var minSubArrayLen = function (target, nums) {
//     let temp = [];
//     for (let i = 0; i < nums.length; i++) {
//         const cur = nums[i];
//         let left = i + 1;
//         let sum = cur;
//         while (left < nums.length && sum < target) {
//             sum += nums[left];
//             left++;
//         }
//         if (sum < target) {
//             continue;
//         }
//         if (i === 0) {
//             temp = nums.slice(0, left);
//         } else if (left - i < temp.length) {
//             temp = nums.slice(i, left);
//         }
//     }
//     return temp.length;
// };
// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end
