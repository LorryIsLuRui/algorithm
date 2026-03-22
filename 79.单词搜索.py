# @before-stub-for-debug-begin
# from python3problem79 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=79 lang=python3
#
# [79] 单词搜索
#
# https://leetcode.cn/problems/word-search/description/
#
# algorithms
# Medium (50.43%)
# Likes:    2159
# Dislikes: 0
# Total Accepted:    860.7K
# Total Submissions: 1.7M
# Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
#
# 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
#
# 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
#
#
#
# 示例 1：
#
#
# 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word =
# "ABCCED"
# 输出：true
#
#
# 示例 2：
#
#
# 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word =
# "SEE"
# 输出：true
#
#
# 示例 3：
#
#
# 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word =
# "ABCB"
# 输出：false
#
#
#
#
# 提示：
#
#
# m == board.length
# n = board[i].length
# 1 <= m, n <= 6
# 1 <= word.length <= 15
# board 和 word 仅由大小写英文字母组成
#
#
#
#
# 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
#
#

# @lc code=start

# 时间：O(MN*3^L)  每一步都有 4 个方向可以选，但不能走回头路，所以每一步实际有 3 个选择。 外层循环 M*N
# 空间O（L）
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m = len(board)
        n = len(board[0])
        str_len = len(word)

        def dfs(i, j, start):
            if (start == str_len):
                return True
            if (i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[start]):
                return
            temp = board[i][j]
            # 同一个单元格内的字母不允许被重复使用，#占位
            board[i][j] = "#"
            # 在当前值的四个方向寻找下一个值，有一个满足即可（内部判断不能回退）
            res = (dfs(i + 1, j, start + 1) or 
                   dfs(i - 1, j, start + 1) or 
                   dfs(i, j + 1, start + 1) or 
                   dfs(i, j - 1, start + 1))
            board[i][j] = temp
            
            return res

        for r in range(m):
            for c in range(n):
                # 每一个位置都可能是起点
                if dfs(r, c, 0):
                    return True
        
        return False

# @lc code=end
# [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
# "SEE"
# s = Solution()
# s.exist(
#     [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
#     "ABCB"
# )
