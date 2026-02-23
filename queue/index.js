class Queue {
    dataSource = [];
    top = 0;
    enqueue(ele) {
        this.dataSource[this.top++] = ele;
    }
    dequeue() {
        this.dataSource.shift();
        this.top--;
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

// 具有优先级的队列, 优先级最高的先出队列
// code 越小 优先级越高
class PriorityQueue {
    // 其他方法参考基础队列实现
    dataSource = [];
    dequeue() {
        let index = 0;
        for (let i = 0; i < dataSource.length; i++) {
            const ele = dataSource[i];
            if (ele.code < this.dataSource[index].code) {
                index = i;
            }
        }
        this.dataSource.splice(index, 1);
    }
}