/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (63.65%)
 * Likes:    2896
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ['1','1','1','1','0'],
 * ['1','1','0','1','0'],
 * ['1','1','0','0','0'],
 * ['0','0','0','0','0']
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ['1','1','0','0','0'],
 * ['1','1','0','0','0'],
 * ['0','0','1','0','0'],
 * ['0','0','0','1','1']
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * 核心：DFS 或 BFS 将相连的陆地标记为已访问
 * 时间复杂度o(m * n) 空间复杂度o(m * n)
 * 思路：遇到1 岛屿数+1，然后使用DFS或BFS将与该陆地相连的所有陆地标记为已访问（将1改为0）
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const setVisited = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        setVisited(i - 1, j); // 上
        setVisited(i + 1, j); // 下
        setVisited(i, j - 1); // 左
        setVisited(i, j + 1); // 右
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                setVisited(i, j);
            }
        }
    }
    return islandCount;
};
// @lc code=end

console.log('\n=== 测试1: 单个大岛屿 ===');
const grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
console.log('结果:', numIslands(grid1));

console.log('\n=== 测试2: 三个独立岛屿 ===');
const grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
console.log('结果:', numIslands(grid2));

// console.log('\n=== 测试3: 复杂情况 ===');
// const grid3 = [
//     ['1','0','1','0','1'],
//     ['0','1','0','1','0'],
//     ['1','0','1','0','1']
// ];
// console.log('结果:', numIslands(grid3));


