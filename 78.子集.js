/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode.cn/problems/subsets/description/
 *
 * algorithms
 * Medium (82.25%)
 * Likes:    2581
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
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
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
var subsets_cus = function(nums) {
    const res = [[]];
    let curWidth = 1;
    const createWidthSubsets = (start = 0, width) => {
        // 生成指定宽度的所有子集, width递归-1
        const final = [];
        for (let i = start; i < nums.length; i++) {
            if (width === 1) {
                final.push([nums[i]]);
            } else {
                const first = nums[i];
                const subs = createWidthSubsets(i + 1, width - 1);
                for (const sub of subs) {
                    final.push([first, ...sub]);
                }
            }
        }
        return final;
    };
    while (curWidth <= nums.length) {
        res.push(...createWidthSubsets(0, curWidth));
        curWidth++;
    }
    console.log(res.length, res);
    return res;
};
/**
 * 核心：使用回溯法
 * 时间复杂度o(n*2^n)
 *      2ⁿ？？？：每个元素都有【选、不选】两种答案，所以2^n 个子集
 *      乘一个 n？：res.append(path.copy()) 拷贝当前路径
 * 空间复杂度 o(n*2^n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const path = [];
    const backtrack = (startIndex) => {
        // 当前路径
        res.push(path.slice());
        for (let i = startIndex; i < nums.length; i++) {

            path.push(nums[i]);
            // 从下一位递归，保证不重复选择
            backtrack(i + 1);
            // 回溯：以nums[i]为开始的路径回溯完毕
            path.pop();
        }
    };
    backtrack(0);
    console.log(res.length, res);
    return res;
}
// @lc code=end
// subsets([1,2,3,4]);
// subsets([3, 2, 4, 1]);


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end