const Stack = require('./index');
console.log(Stack);
// 2 6 8进制转换
const transNum = (num, base) => {
    const stack = new Stack();
    let originNum = num;
    do {
        stack.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);
    let res = ''
    while (stack.length()) {
        res += stack.pop()
    }
    console.log('num=', originNum, ';base=', base, ';result=', res);
};
transNum(32, 2);
transNum(125, 8);