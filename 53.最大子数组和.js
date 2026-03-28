/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 *
 * https://leetcode.cn/problems/maximum-subarray/description/
 *
 * algorithms
 * Medium (56.55%)
 * Likes:    7351
 * Dislikes: 0
 * Total Accepted:    2.5M
 * Total Submissions: 4.5M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 *
 */

// @lc code=start
/** o(n) o(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0];
    // let currSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 决策：加上当前值后大小
        //      选nums[i] 则curr从当前开始计算
        //      选curr + nums[i]，则表示可以连接上一个结果
        currSum = Math.max(nums[i], currSum + nums[i]);
        sum = Math.max(sum, currSum);
    }
    return sum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
