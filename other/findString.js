// 找出字符串
// https://www.nowcoder.com/practice/06f532d3230042769b4d156e963a4f4a?tpId=46&&tqId=38912&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
// 采用二分查找
const findString = (arr, n, x) => {
    let start = 0;
    let end = n;
    let idx = 0;
    while (start <= end) {
        let midIdx = (start + end) % 2 === 0 ? (start + end) / 2 - 1 : Math.floor((start + end) / 2);
        if (!arr[midIdx]) {
            midIdx += 1;
        }
        if (x < arr[midIdx]) {
            end = midIdx - 1;
        } else if(x > arr[midIdx]) {
            start = midIdx + 1
        } else if (arr[midIdx] === x) {
            idx = midIdx;
            return idx;
        }
    }
    return idx;
};

const arr = ['a', '', 'b', 'c', '', 'd'];
const idx = findString(arr, 5, 'd');
console.log(idx);
