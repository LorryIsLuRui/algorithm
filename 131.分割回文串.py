# @before-stub-for-debug-begin
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=131 lang=python3
#
# [131] 分割回文串
#
# https://leetcode.cn/problems/palindrome-partitioning/description/
#
# algorithms
# Medium (75.35%)
# Likes:    2186
# Dislikes: 0
# Total Accepted:    750K
# Total Submissions: 997.5K
# Testcase Example:  '"aab"'
#
# 给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：s = "aab"
# 输出：[["a","a","b"],["aa","b"]]
# 
# 
# 示例 2：
# 
# 
# 输入：s = "a"
# 输出：[["a"]]
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= s.length <= 16
# s 仅由小写英文字母组成
# 
# 
#

# @lc code=split_start_idx
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []
        temp = []
        # 每个方案，最大能分割len个子串
        total = len(s)
        def dfs(split_start_idx = 0):
            if split_start_idx == total:
                res.append(temp.copy())
                return
            # 遍历：for递增切割长度 。循环从当前轮切割起点开始 i 递增（最大到末尾） 
            #    过程中判断当前是回文，开始递归下一轮起点
            for i in range(split_start_idx, total):
                cur = s[split_start_idx : i + 1]
                if cur == cur[::-1]:
                    temp.append(cur)
                    dfs(i + 1)
                    temp.pop()

        dfs()
        return res
        
# @lc code=end

