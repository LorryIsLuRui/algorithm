/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
    this.stack = [];
    this.virtualStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x === null) return;
    this.stack.push(x);
    if (!this.virtualStack.length) this.virtualStack = [x];
    this.virtualStack.push(Math.min(this.virtualStack[this.virtualStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.stack.length) return;
    this.stack.pop();
    this.virtualStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (!this.stack.length) return;
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (!this.stack.length) return;
    return this.virtualStack[this.virtualStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = MinStack;
// @after-stub-for-debug-end