// 微信读书-数据结构与算法 JavaScript描述
// pratice 4.4-2
// 一个算术表达式的后缀表达式形式如下：op1 op2 operator
// 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，
// 设计并实现一个JavaScript函数，该函数可以将中缀表达式转换为后缀表达式
// 然后利用栈对该表达式求值。
// 中缀 (3 + 4) × 5 - 6
// 后缀 34+5×6-
// 前缀 +×-3456

const Stack = require(".");

const fn = medium => {
    const num = new Stack();
    const opts = new Stack();
    const arr = [];
    let front = '';
    for (let i = 0; i < medium.length; i++) {
        const ele = medium[i];
        if (+ele >= 0) {
            front = front ? front : ele;
            num.push(ele);
            if (opts.length()) {
                const opt = opts.pop();
                const num1 = num.pop();
                const num2 = num.pop();
                const res = new Function(`return ${num2}${opt}${num1}`)();
                num.push(res+'');
                // front = num2;
                arr.push(num1, opt);
            }
        } else if (!['(',')'].includes(ele)) {
            opts.push(ele);
        }
    }
    arr.unshift(front);
    console.log(num.peek(), arr.join(''));
};
const medium = '(3+4)*5-6';
fn(medium);