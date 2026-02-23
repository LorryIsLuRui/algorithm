// 微信读书-数据结构与算法 JavaScript描述
// pratice 4.4
const Stack = require(".");

// 判断是否是回文数
const isPalindNum = str => {
    const stack =  new Stack();
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        stack.push(element);
    }
    let reverseStr = '';
    while (stack.length()) {
        reverseStr += stack.pop();
    }
    console.log(reverseStr === str);
};
// const str = 'racar';
const str = '-121';
isPalindNum(str);