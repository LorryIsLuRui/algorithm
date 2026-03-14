#
# @lc app=leetcode.cn id=128 lang=python3
#
# [128] 最长连续序列
#
# https://leetcode.cn/problems/longest-consecutive-sequence/description/
#
# algorithms
# Medium (49.36%)
# Likes:    2721
# Dislikes: 0
# Total Accepted:    1.4M
# Total Submissions: 2.7M
# Testcase Example:  '[100,4,200,1,3,2]'
#
# 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
# 
# 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：nums = [100,4,200,1,3,2]
# 输出：4
# 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
# 
# 示例 2：
# 
# 
# 输入：nums = [0,3,7,2,5,8,4,6,0,1]
# 输出：9
# 
# 
# 示例 3：
# 
# 
# 输入：nums = [1,0,1,2]
# 输出：3
# 
# 
# 
# 
# 提示：
# 
# 
# 0 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9
# 
# 
#

# @lc code=start
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0
        occ = set(nums)
        max_len = 0
        for num in occ:
            cur_len = 0
            if (num - 1) not in occ:
                start = num
                cur_len += 1
                while (start + 1) in occ:
                    cur_len += 1
                    start = start + 1
            max_len = max(max_len, cur_len)
        return max_len
        
# @lc code=end

