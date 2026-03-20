# @before-stub-for-debug-begin
from python3problem678 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=678 lang=python3
#
# [678] 有效的括号字符串
#
# https://leetcode.cn/problems/valid-parenthesis-string/description/
#
# algorithms
# Medium (40.32%)
# Likes:    691
# Dislikes: 0
# Total Accepted:    89.3K
# Total Submissions: 221K
# Testcase Example:  '"()"'
#
# 给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是 有效 字符串返回 true
# 。
# 
# 有效 字符串符合如下规则：
# 
# 
# 任何左括号 '(' 必须有相应的右括号 ')'。
# 任何右括号 ')' 必须有相应的左括号 '(' 。
# 左括号 '(' 必须在对应的右括号之前 ')'。
# '*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串 ""。
# 
# 
# 
# 
# 示例 1：
# 
# 
# 输入：s = "()"
# 输出：true
# 
# 
# 示例 2：
# 
# 
# 输入：s = "(*)"
# 输出：true
# 
# 
# 示例 3：
# 
# 
# 输入：s = "(*))"
# 输出：true
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= s.length <= 100
# s[i] 为 '('、')' 或 '*'
# 
# 
#

# @lc code=start
class Solution:
    def checkValidString(self, s: str) -> bool:
        open_stack = []
        sym_stack = []
        for i in range(len(s)):
            c = s[i]
            if c == '*':
                sym_stack.append(i)
            elif c == '(':
                open_stack.append(i)
            else:
                # 优先匹配 '('
                if open_stack:
                    open_stack.pop()
                # 无 '(' 则用 '*' 当作 '(' 匹配
                elif sym_stack:
                    sym_stack.pop()
                else:
                    return False
        while open_stack and sym_stack:
            open_idx = open_stack.pop()
            star_idx = sym_stack.pop()
            # 无法用*消耗 (
            if star_idx < open_idx:
                return False
        return len(open_stack) == 0

        
# @lc code=end
