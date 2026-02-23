// 先进后出
class Stack {
    dataSource = [];
    top = 0; // 指向栈顶
    push = val => {
        this.dataSource[this.top++] = val;
    }
    pop = () => {
        return this.dataSource[--this.top];
    };
    peek = () => {
        return this.dataSource[this.top-1];
    };
    length = () => {
        return this.top;
    };
    clear = () => {
        this.dataSource = [];
        this.top = 0;
    };
};
module.exports = Stack;