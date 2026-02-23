/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (numbers[mid] > numbers[right]) { // 此部分是降序,分界点在后半部分
            left = mid + 1;
        } else if (numbers[mid] < numbers[right]) { // 此部分是升序,分界点在前半部分
            right = mid;
        } else { // 说明遇到了重复元素 暴力缩小范围
            right--;
        }
    }
    return numbers[right];
};
console.log(minArray([3,4,5,1,2]));
console.log(minArray([2,2,2,0,1]));
console.log(minArray([3,1]));