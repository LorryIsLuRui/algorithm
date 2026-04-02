/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (60.43%)
 * Likes:    2895
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2.6M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 *
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */
// 方法
// 平均时间
// 最坏时间
// 空间

// 排序
// O(n log n)
// O(n log n)
// O(1)
// 堆
// O(n log k)
// O(n log k)
// O(k)
// QuickSelect
// O(n)
// O(n²)
// O(1)
// ⭐ 三路 QuickSelect
// O(n)
// O(n²)（极少）
// O(1)

// @lc code=start
/** 快排、堆排序、随机pivot,都会超时
 * 最优解：三路划分 + 随机 pivot
 * o(n) o(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    // 三路划分
    const target = nums.length - k;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // 🎯 随机 pivot
        const randomIndex =
            Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot = nums[randomIndex];
        // 三路划分
        let lt = left; // < pivot
        let gt = right; // > pivot
        let i = left;
        while (i <= gt) {
            if (nums[i] < pivot) {
                [nums[lt], nums[i]] = [nums[i], nums[lt]];
                lt++;
                i++;
            } else if (nums[i] > pivot) {
                [nums[gt], nums[i]] = [nums[i], nums[gt]];
                gt--;
            } else {
                i++;
            }
        }
        // 🎯 判断 target 在哪一段
        if (target >= lt && target <= gt) return nums[target];
        else if (target < lt) {
            right = lt - 1;
        } else {
            left = gt + 1;
        }
    }
};
// @lc code=end
var findKthLargest1 = function (nums, k) {
    // 方法1: 快速选择算法 (Quick Select) - O(n) 平均时间复杂度
    // 第 k 个最大元素 等价于 第 (n-k) 个最小元素
    const n = nums.length;
    return quickSelect(nums, 0, n - 1, n - k);

    function quickSelect(nums, left, right, kSmallest) {
        if (left === right) return nums[left];

        // 随机选择 pivot，避免最坏情况
        const pivotIndex = partition(nums, left, right);

        if (kSmallest === pivotIndex) {
            return nums[kSmallest];
        } else if (kSmallest < pivotIndex) {
            return quickSelect(nums, left, pivotIndex - 1, kSmallest);
        } else {
            return quickSelect(nums, pivotIndex + 1, right, kSmallest);
        }
    }

    function partition(nums, left, right) {
        // 随机选择 pivot
        const randomIndex =
            left + Math.floor(Math.random() * (right - left + 1));
        swap(nums, randomIndex, right);

        const pivot = nums[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                swap(nums, i, j);
                i++;
            }
        }

        swap(nums, i, right);
        return i;
    }

    function swap(nums, i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};

// 方法2: 小根堆 - O(n log k) 时间复杂度，更容易理解，空间复杂度 O(k)
var findKthLargest_timelimited = function (nums, k) {
    // 维护大小为 k 的小根堆
    const heap = [];

    for (let num of nums) {
        heap.push(num);
        heap.sort((a, b) => a - b); // 升序排列（堆顶最小）

        if (heap.length > k) {
            heap.shift(); // 移除最小元素
        }
    }

    return heap[0]; // 堆顶就是第 k 个最大元素
};

// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end