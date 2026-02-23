/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (58.22%)
 * Likes:    4145
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.4M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_1 = function (nums) {
    let maxlen = 1;

    const trace = (target, start) => {
        if (start > nums.length - 1) return 0;
        let len = 0;
        for (let i = start; i < nums.length; i++) {
            if (nums[i] > target) {
                len++;
                if (i === nums.length - 1) {
                    return len;
                }
                // 以当前数字为起点的最长递增子序列长度
                const curLen = trace(nums[i], i + 1);
                len = len + curLen;
            }
            continue;
        }
        return len;
    }
    for (let i = 0; i < nums.length; i++) {
        const curLen = trace(nums[i], i + 1);
        console.log('curLen :>> ', nums[i], curLen);
        maxlen = Math.max(maxlen, curLen);
    }
    console.log('maxlen :>> ', maxlen);
    return maxlen;
};
// 动态规划
// 时间复杂度：O(n^2)，其中 n 是输入数组的长度。每个元素都需要与之前的元素进行比较，比较的时间复杂度为 O(n)，总共需要进行 n 次比较。
// 空间复杂度：O(n)，其中 n 是输入数组的长度。需要一个长度为 n 的数组 dp 来存储以每个元素结尾的最长递增子序列的长度。
var lengthOfLIS_dp = function (nums) {
    if (nums.length === 0) return 0;

    // dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
    const dp = new Array(nums.length).fill(1);
    let maxResult = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // 大于，nums[i] 可以接在 nums[j] 后面
                //  可以接那么dp[j]结尾的长度就 +1
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxResult = Math.max(maxResult, dp[i]);
    }
    console.log('maxResult :>> ', maxResult);
    return maxResult;
}
// 贪心 + 二分查找
/**
 * 核心思想：
 * 1. 使用一个数组 tails，其中 tails[k] 存储长度为 k+1 的递增子序列的最小结尾元素。
 * 2. 遍历输入数组，对于每个元素 num，使用二分查找在 tails 中找到第一个大于等于 num 的位置 idx。
 *   - 如果 idx 等于 tails 的长度，说明 num 比 tails 中的所有元素都大，直接将 num 添加到 tails 末尾。
 *  - 否则，更新 tails[idx] 为 num，以保持 tails 中的元素尽可能小。
 * 3. 最终，tails 的长度即为最长递增子序列的长度。
 * 
 * 时间复杂度：O(n log n)，其中 n 是输入数组的长度。每个元素都需要进行一次二分查找，二分查找的时间复杂度为 O(log n)。
 * 空间复杂度：O(n)，最坏情况下，tails 数组可能包含所有输入元素。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // tails[0] = 长度为 1 的子序列的最小结尾
    // tails[1] = 长度为 2 的子序列的最小结尾
    const tails = []; // 数组严格递增

    for (let num of nums) {
        let left = 0, right = tails.length;

        // 二分查找：找到 tails 中第一个 >= num 的位置
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) left = mid + 1;
            else right = mid;
        }

        // 如果没找到比 num 大的，说明可以延长序列
        if (left === tails.length) {
            tails.push(num);
        } else {
            // 否则，更新那个位置，使末尾数值更小（贪心）
            tails[left] = num;
        }
    }
    const len = tails.length;
    console.log('len :>> ', len);
    return len;
}
// @lc code=end
lengthOfLIS_dp([1,2,1,4]);
// lengthOfLIS_dp([10, 9, 2, 5, 3, 7, 101, 18]);
// lengthOfLIS([0,1,0,3,2,3]);
// lengthOfLIS([7,7,7,7,7,7,7]);

