/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (55.06%)
 * Likes:    20522
 * Dislikes: 0
 * Total Accepted:    7.1M
 * Total Submissions: 12.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 * 
 * 
 * 
 * 
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 * 
 */

// @lc code=start
/**
 * 核心：双重循环
 * 时间复杂度o(n^2) 空间复杂度o(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_1 = function(nums, target) {
    let idx = 0;
    let nextIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const need = target - first;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === need) {
                idx = i;
                nextIdx = j;
                return [idx, nextIdx];
            }
        }
    }
    console.log(idx, nextIdx);
    return [idx, nextIdx];
};
// 时间复杂度: o(n log n) + o(n) = o(n log n)
// 空间复杂度: o(n)
var twoSum = function(nums, target) {
    // 创建一个 Map，用于存储： { 数值 : 索引 }
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const need = target - num;
        // 1. 检查“记事本”里是否有我们需要的那个数
        if (map.has(need)) {
            // 如果有，直接返回结果，结束函数
            console.log([map.get(need), i]);
            return [map.get(need), i];
        }
        // 2. 如果没有，就把当前的数存进去，方便后面的人找
        map.set(num, i);
    }
    return [];
}
// @lc code=end
// twoSum([3,2,4], 6);
twoSum([3,3], 6);
twoSum([2,11,15,7], 9);
