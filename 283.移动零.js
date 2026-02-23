/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.89%)
 * Likes:    2818
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 3.4M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [0]
 * 输出: [0]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：你能尽量减少完成的操作次数吗？
 * 
 */

// @lc code=start
/**
 * 核心思想：双指针
 * 一个指针指向当前遍历到的位置，另一个指针指向第一个0的位置，当遇到非0元素时，交换两个指针所指向的元素，并将第一个0的位置指针右移一位
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 0) return;
    const len = nums.length;
    let left = 0; // 指向第一个0的位置
    let right = 0;
    while (right < len) {
        if (nums[right] !== 0) {
            // 把非0元素交换到值是0的位置
            [nums[left], nums[right]] = [nums[right], nums[left]];
            // 将第一个0的位置指针右移一位
            left++;
        }
        right++;
    }
    return nums;
    // let zeroIdx = 0;
    // let i = 0;
    // while (i < nums.length) {
    //     if (nums[i] === 0) {
    //         // const temp = nums[ i + 1 ];
    //         // nums[ zeroIdx + 1 ] = nums[i];
    //         // nums[i] = temp;
    //         zeroIdx = Math.min(zeroIdx, i);
    //     } else {
    //         if (i > 0) {
    //             nums[ zeroIdx ] = nums[i];
    //             nums[i] = 0;
    //             // zeroIdx++;
    //         }
    //     }
    //     i++;
    // }
    // return nums;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end