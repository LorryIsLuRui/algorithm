/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (49.36%)
 * Likes:    2721
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.7M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,0,1,2]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/** 核心: 遍历set，当前数字如果是一个序列的起点，则向后一直寻找连续序列
 * 时间复杂度：O(n)，其中 n 是输入数组的长度。每个元素最多被访问两次，一次是在将其添加到集合中，另一次是在寻找连续序列时。 while 循环在所有迭代中总共只会执行 n 次，因为每个数字最多只会被访问一次。
 * 空间复杂度：O(n)，其中 n 是输入数组的长度。需要一个集合来存储数组中的所有元素。
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;  // 添加这行
    const set = new Set(nums);
    let maxLength = 0;
    
    for (const num of set) {
        if (!set.has(num - 1)) {
            // 是一个序列的起点
            let currentNum = num;
            let currentLength = 1;
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};
// @lc code=end

