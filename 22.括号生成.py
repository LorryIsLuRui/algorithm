# @before-stub-for-debug-begin
from python3problem22 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] 括号生成
#
# https://leetcode.cn/problems/generate-parentheses/description/
#
# algorithms
# Medium (79.09%)
# Likes:    4011
# Dislikes: 0
# Total Accepted:    1.2M
# Total Submissions: 1.5M
# Testcase Example:  '3'
#
# 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：n = 3
# 输出：["((()))","(()())","(())()","()(())","()()()"]
# 
# 
# 示例 2：
# 
# 
# 输入：n = 1
# 输出：["()"]
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= n <= 8
# 
# 
#

# @lc code=start
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        temp = []
        def dfs(open_cnt = 0, close_cnt = 0):
            if (len(temp) == 2 * n):
                res.append("".join(temp))
                return
            if open_cnt < n:
                temp.append('(')
                dfs(open_cnt + 1, close_cnt)
                temp.pop()
            if close_cnt < open_cnt:
            # if close_cnt < n:  不能这么写，否则组合可能无效 eg:open_cnt=0 close_cnt=1<2 temp=[')']
                # 这里保证组合是有效括号
                temp.append(')')
                dfs(open_cnt, close_cnt + 1)
                temp.pop()
        
        dfs()
        return res
        
# @lc code=end

