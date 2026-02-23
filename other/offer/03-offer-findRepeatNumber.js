/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//     const res = [];
//     const map = {};
//     let num = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (!map[nums[i]]) {
//             res.push(nums[i]);
//         } else {
//             num = nums[i];
//             break;
//         }
//         map[nums[i]] = true;
//     }
//     return num;
// };
// 1. 标记法
var findRepeatNumber = function(nums) {
    let repeat = 0;
    let i = 0;
    while (i < nums.length) {
        const ele = nums[i];
        if (ele === i) {
            i++;
            continue;
        }
        if (nums[ele] === ele) return ele;
        nums[i] = nums[ele];
        nums[ele] = ele;
    }
    return repeat;
};
console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]));
// console.log(findRepeatNumber([1,3,1,0,2,5,3]));
