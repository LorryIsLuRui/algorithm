/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode.cn/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (64.03%)
 * Likes:    1329
 * Dislikes: 0
 * Total Accepted:    486K
 * Total Submissions: 759K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * 核心：先排序 回溯过程中剪枝
 * 时间复杂度o(n * 2^n) 空间复杂度o(n)
 * 思路：
 * 1. 对数组进行排序，保证相同元素相邻
 * 2. 回溯生成子集
 * 3. 在回溯过程中，跳过相同元素以避免重复子集
 * 4. 每次递归调用时，将当前路径加入结果集
 * 5. 使用start参数控制搜索起点，避免重复使用元素
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // 【空间复杂度】：path 数组长度最大为 o(n)
    const path = [];
    const res = [];
    nums.sort((a, b) => a - b); // 先排序
    const backtrack = (start) => {
        // 克隆，防止后面pop影响 
        // 克隆一个长度为 k 的数组，需要遍历这个数组并将元素逐个复制到新内存中，
        // 【时间复杂度】这个操作的时间复杂度是 O(k)。
        res.push(path.slice());
        // i表示当前层的索引
        for(let i = start; i < nums.length; i++) {
            // i > start (说明到下一轮)
            if (i > start && nums[i] === nums[i - 1]) {
                continue; // 跳过重复元素
            }
            path.push(nums[i]);
            backtrack(i + 1)
            path.pop();
        }
    }
    backtrack(0);
    console.log(res);
    return res;
};
// @lc code=end
subsetsWithDup([1,2,2]);

// @after-stub-for-debug-begin
module.exports = subsetsWithDup;
// @after-stub-for-debug-end