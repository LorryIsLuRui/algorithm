/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (40.11%)
 * Likes:    7823
 * Dislikes: 0
 * Total Accepted:    2.7M
 * Total Submissions: 6.7M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * 核心思想：排序 + 双指针，固定一个数，另外两个数用双指针寻找，注意去重，
 * 时间复杂度O(n^2)，空间复杂度O(logn)。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums?.length || nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重, 这个值满足的三元组已经找过了，跳过
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum===0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // 去重
                while (left < right && nums[right] === nums[right - 1]) right--; // 去重
                left++;
                right--;
            }
            if (sum < 0) {
                left++;
            }
            if (sum > 0) {
                right--;
            }
        }
    }
    return res;
    
    // if (nums.length < 3) return [];
    // nums.sort((a, b) => a - b);
    // const res = [];
    // for (let i = 0; i < nums.length - 2; i++) {
    //     // 跳过重复的第一个数
    //     if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    //     let left = i + 1;
    //     let right = nums.length - 1;
    //     while (left < right) {
    //         const sum = nums[i] + nums[left] + nums[right];
    //         if (sum === 0) {
    //             res.push([nums[i], nums[left], nums[right]]);
    //             // 两个 while 只是跳过重复，停在最后一个重复元素上
    //             while (left < right && nums[left] === nums[left + 1]) left++; // 去重
    //             while (left < right && nums[right] === nums[right - 1]) right--; // 去重
    //             // 最后的 left++ 和 right-- 才是真正移动到新元素
    //             left++;
    //             right--;
    //         } else if (sum < 0) {
    //             left++;
    //         } else {
    //             right--;
    //         }
    //     }
    // }
    // console.log(res);
    // return res;
};

// @lc code=end
threeSum([-1, 0, 1, 2, -1, -4]);
// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end