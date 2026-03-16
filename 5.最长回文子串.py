# @before-stub-for-debug-begin
from python3problem5 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#
# https://leetcode.cn/problems/longest-palindromic-substring/description/
#
# algorithms
# Medium (40.29%)
# Likes:    7943
# Dislikes: 0
# Total Accepted:    2.2M
# Total Submissions: 5.5M
# Testcase Example:  '"babad"'
#
# 给你一个字符串 s，找到 s 中最长的 回文 子串。
#
#
#
# 示例 1：
#
#
# 输入：s = "babad"
# 输出："bab"
# 解释："aba" 同样是符合题意的答案。
#
#
# 示例 2：
#
#
# 输入：s = "cbbd"
# 输出："bb"
#
#
#
#
# 提示：
#
#
# 1 <= s.length <= 1000
# s 仅由数字和英文字母组成
#
#
#

# @lc code=start


class Solution:
    def longestPalindrome(self, s: str) -> str:
        # 动态规划 时间、空间O(n²) 
        n = len(s)
        if n <= 1:
            return s
        # 初始化数组，n×n，  dp[2][3]表示：索引从2-》3的子串是否是回文串
        dp = [[False] * n for _ in range(n)]
        start = 0
        max_len = 1
        for i in range(n):
            # 本身是长度为1的回文
            dp[i][i] = True

        # 遍历子串长度 左开右闭不包含n+1
        for length in range(2, n + 1):
            # 遍历子串起始索引
            for i in range(n - length + 1):
                j = i + length - 1
                if length == 2:
                    # 两端相同
                    dp[i][j] = s[i] == s[j]
                else:
                    # 两端相同 内部区间也是回文
                    dp[i][j] = (s[i] == s[j] and dp[i + 1][j - 1])
                cur_len = j - i + 1
                if (dp[i][j]) and cur_len > max_len:
                    max_len = cur_len
                    start = i
        return s[start: start + max_len]

    # def find(self, s, left, right):
    #     n = len(s)
    #     if (left >= 0 and right < n and s[left] == s[right]):
    #         return self.find(s, left - 1, right + 1)
    #     return right - left - 1
    # def find(self, s, left, right):
    #     n = len(s)
    #     while (left >= 0 and right < n and s[left] == s[right]):
    #         left -= 1
    #         right += 1
    #     return right - left - 1
    # # 时间 O (n²)，while循环：空间 O (1)，递归：O(n²)
    # def longestPalindrome(self, s: str) -> str:
    #     n = len(s)
    #     start = 0
    #     max_len = 0
    #     if (n <= 1):
    #         return s
    #     for i in range(n):
    #         # 一个中心点 奇数字符串
    #         odd_len = self.find(s, i, i)
    #         # 2个中心点，偶数字符串
    #         even_len = self.find(s, i, i + 1)
    #         cur_len = max(odd_len, even_len)
    #         if (cur_len > max_len):
    #             # 左边的中心点
    #             start = i - (cur_len - 1) // 2
    #             max_len = cur_len

    #     return s[start : start + max_len]

# @lc code=end
