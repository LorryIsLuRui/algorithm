// 微信读书-数据结构与算法 JavaScript描述
// pratice 5.6-1

// 这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列
class BidireactionalQueue {
    dataSource = [];
    top = 0;
    appendRight(ele) {
        this.dataSource[this.top++] = ele;
    }
    popRight() {
        this.dataSource.shift();
        this.top--;
    }
    appendLeft(ele) {
        this.dataSource.unshift(ele);
    }
    popLeft() {
        this.dataSource.pop();
    }
    front() {
        return this.dataSource[0]
    }
    end() {
        return this.dataSource[this.top];
    }
    empty() {
        this.dataSource = [];
        this.top = 0;
    }
    isEmpty() {
        return !this.dataSource.length
    }
}