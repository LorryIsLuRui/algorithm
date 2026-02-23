// CC218 最长合成字符串
// https://www.nowcoder.com/practice/92a6faa7377f4c049a18154b24458d2a?tpId=46&&tqId=38934&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
const longestString = words => {
    const len = words.length;
    let result = 0;
    const sortWords = words.sort((a, b) => b.length - a.length); // 按字符串长度从大到小排序
    for (let i = 0; i < len; i++) {
        let ele = sortWords[i];
        for (let j = i + 1; j <= len - 1; j++) {
            const element = sortWords[j];
            const idx = ele.indexOf(element);
            if (idx > -1) {
                ele = ele.replace(element, '');
            }
            if (ele.length === 0) {
                result = sortWords[i].length;
                return result;
            }
        }
    }
}
const words = ["a","b","c","ab","bc","abc"];
const res = longestString(words);
console.log(res);