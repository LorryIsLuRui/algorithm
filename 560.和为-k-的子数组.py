# @before-stub-for-debug-begin
from python3problem560 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=560 lang=python3
#
# [560] 和为 K 的子数组
#
# https://leetcode.cn/problems/subarray-sum-equals-k/description/
#
# algorithms
# Medium (46.08%)
# Likes:    3067
# Dislikes: 0
# Total Accepted:    1M
# Total Submissions: 2.2M
# Testcase Example:  '[1,1,1]\n2'
#
# 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
# 
# 子数组是数组中元素的连续非空序列。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：nums = [1,1,1], k = 2
# 输出：2
# 
# 
# 示例 2：
# 
# 
# 输入：nums = [1,2,3], k = 3
# 输出：2
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= nums.length <= 2 * 10^4
# -1000 <= nums[i] <= 1000
# -10^7 <= k <= 10^7
# 
# 
#
# @lc code=start
from collections import defaultdict
# 连续序列-》前缀和 复杂度都是O(n)
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_sum = defaultdict(int)
        current_sum = 0
        prefix_sum[0] = 1
        count = 0

        for num in nums:
            current_sum += num
            if (current_sum - k) in prefix_sum:
                count += prefix_sum[current_sum - k]
            prefix_sum[current_sum] += 1
        return count

        
# @lc code=end

