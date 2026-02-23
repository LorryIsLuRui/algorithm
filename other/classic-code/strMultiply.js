// 3. 字符串乘法
// https://www.nowcoder.com/practice/76a5d7a3173446c2ab34b8c5fe836f1d?tpId=46&&tqId=29136&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
const multiply = (str1, str2) => {
    const num1Arr = str1.split('').reverse();
    const num2Arr = str2.split('').reverse();
    let basic = [];
    let oth = [];
    const ans = [];
    if (num1Arr.length >= num2Arr.length) { // 较大的数为外层循环
        basic = num1Arr;
        oth = num2Arr;
    } else {
        basic = num2Arr;
        oth = num1Arr;
    }
    let result = [];
    for (let i = 0; i < basic.length; i++) {
        for (let j = 0; j < oth.length; j++) {
            result[i + j] = (result[i + j] || 0) + basic[i] * oth[j];
        }
    }
    for (let k = 0; k < result.length; k++) {
        if (result[k] > 9) {
            result[k+1] = (result[k+1] || 0) + Math.floor(result[k] / 10);
            result[k] = result[k] % 10;
        }
    }
    result = result.reverse();
    while (+result[0] === 0 && result.length !== 1) { // 避免输出 2333 * 0 = '0000'
        result.splice(0, 1);
    }
    return result.join('');
}