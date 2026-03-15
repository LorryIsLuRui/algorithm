/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 *
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (46.08%)
 * Likes:    3067
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 
 * 子数组是数组中元素的连续非空序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 连续子数组-》前缀和
    const occ = new Map();
    let curSum = 0;
    let count = 0;
    occ.set(0, 1);
    for (let num of nums) {
        curSum += num;
        if (occ.has(curSum - k)) {
            count += occ.get(curSum - k);
        }
        occ.set(curSum, (occ.get(curSum) || 0) + 1);
    }
    return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraySum;
// @after-stub-for-debug-end