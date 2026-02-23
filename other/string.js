// 牛客-经典必刷题-字符串类型算法
// https://www.nowcoder.com/ta/classic-code

// 2. 搅乱字符串
// https://www.nowcoder.com/practice/2bdc44bb0186468b8d8c13ea5d3a9e58?tpId=46&&tqId=29091&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
const arr = [-1,1,2,0,4];
const objarr = [
    {
        age: -1,
    },
    {
        age: 10,
    },
    {
        age: -40,
    }
]

const sortBy = (attr,rev) => {
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}

objarr.sort(sortBy('age', true));
console.log(objarr);
// console.log(arr);