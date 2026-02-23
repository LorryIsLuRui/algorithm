/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分一次
/**
 * 
 *  var search = function(nums, target) {
    let start = 0;
    let end = Math.ceil(nums.length / 2);
    let res = 0;
    while (end <= nums.length) {
        if (nums[start] > target) {
            return 0;
        }
        if (nums[end] < target) {
            start = end;
            end++;
        }
        if (nums[start] === target) {
            res += 1;
        }
        start++;
        if (nums[start] <= target) {
            continue;
        } else {
            return res;
        }
    }
    return 0;
};
 * 
 **/
// 二分法
const binarySearch = (arr, tar, flag) => {
    let left = 0;
    let right = arr.length - 1;
    let ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= tar) {
            if (flag) {
                left = mid + 1;
                ans = mid;
                // break;
            } else {
                ans = mid;
                break;
            }
        } else if (arr[mid] > tar) {
            right = mid - 1;
        }
    }
    return ans;
};
var search = function(nums, target) {
    const left = binarySearch(nums, target, true); // 查找第一个大于等于target的位置
    const right = binarySearch(nums, target, false); // 查找第一个大于target的位置
    return right - left + 1;
};
