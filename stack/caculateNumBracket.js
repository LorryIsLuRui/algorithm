// 微信读书-数据结构与算法 JavaScript描述
// pratice 4.4-1
// algorithm/stack/caculateNumBracket.js

const Stack = require(".");

const fn = str => {
    const s = new Stack();
    let idx = 0;
    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        if (ele.includes('（')) {
            s.push(ele);
            idx = i + 1;
        }
        if (ele.includes('）')) {
            s.pop();
        }
    }
    console.log(idx);
};
const str = '2.3+23/12+（3.14159×0.24';
fn(str);