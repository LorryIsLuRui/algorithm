// 4. 反转字符串
// https://www.nowcoder.com/practice/c3a6afee325e472386a1c4eb1ef987f3?tpId=188&&tqId=38605&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

const strReverse = str => {
    if (!str) return '';
    const ans = [];
    for (let i = str.length - 1; i >= 0; i--) {
        ans.push(str[i]);
    }
    return ans.join('');
};
const res = strReverse('abcd');
console.log(res);