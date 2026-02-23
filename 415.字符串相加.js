/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (55.03%)
 * Likes:    897
 * Dislikes: 0
 * Total Accepted:    399.7K
 * Total Submissions: 726.3K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 
 * 
 */
// 数组 vs 字符串拼接：在循环中我们使用 res.push() 而不是 str = res + str。因为在 JavaScript 中字符串是不可变的，频繁的字符串拼接会产生大量的临时对象，而数组操作性能更优。
// @lc code=start
/** 核心思想： 模拟竖式加法，从个位开始逐位相加，注意进位
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings1 = function(num1, num2) {
    // 时间复杂度 O(n^2)
    // 空间复杂度 O(n)  需要一个存储结果的字符串，长度为 $n$。但在拼接过程中产生的临时中间字符串会导致内存抖动。
    let sum = '';
    let nextAdd = 0;
    const maxArr = num1.length > num2.length ? num1 : num2;
    const minArr = num1.length > num2.length ? num2 : num1;
    const maxLen = maxArr.length;
    const minLen = minArr.length;
    let j = minLen - 1;
    if (minLen === 1 && minArr[0] === '0') {
        console.log('maxArr :>> ', maxArr);
        return maxArr;
    }
    for(let i = maxLen - 1; i >= 0; i--) {
        const curSum = (maxArr[i] ?? 0) * 1 + (minArr[j] ?? 0) * 1 + nextAdd;
        const yu = curSum % 10;
        // 字符串拼接o(n^2)：系统都会开辟一块全新的内存空间，并把旧的 sum 整个复制过去
        sum = (yu >= 0 ? yu : '0') + sum;
        nextAdd = Math.floor(curSum / 10);
        j--;
    }
    if (nextAdd > 0) {
        sum = nextAdd + sum;
    }
    console.log('sum :>> ', sum);
    return sum;
};
// 优化版本
/**
 * 核心： 模拟竖式加法，从个位开始逐位相加，注意进位
 */
// 时间复杂度 O(n)
// 空间复杂度 O(n)
// 数组的 push 是 O(1) 的，这样总时间复杂度能降到 O(n)。
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0; // 进位
    const res = []; // 用数组存，避免 O(n^2) 的字符串拼接问题

    // 只要还有一个串没走完，或者还有进位，就继续
    while (i >= 0 || j >= 0 || carry !== 0) {
        // 使用单目运算符 + 或者 - '0' 将字符转数字
        const n1 = i >= 0 ? +num1[i] : 0;
        const n2 = j >= 0 ? +num2[j] : 0;

        const curSum = n1 + n2 + carry;
        res.push(curSum % 10);      // 存入当前位
        carry = Math.floor(curSum / 10); // 计算下次进位

        i--;
        j--;
    }
    // 因为是 push 进去的，个位在最前面，所以要反转
    return res.reverse().join('');
};


// @lc code=end
// addStrings('11', '123');
// addStrings('456', '77');
// addStrings('1', '9');
// addStrings('9133', '0');
// addStrings('9999', '1');
// addStrings('408', '5');

