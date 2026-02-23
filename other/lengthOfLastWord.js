// 字符串最后一个单词长度
// https://www.nowcoder.com/practice/dae459428862446daf49b75d26d7523d?tpId=46&&tqId=29121&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
const lengthOfLastWord = s => {
    let idx = 0;
    const len = s.length;
    const blankreg = /\s([a-z]|[A-Z])*$/g;
    const res = blankreg.exec(s);
    return res ? res[0].length - 1 : 0;
};
// const s ="Hello World";
// const res = lengthOfLastWord(s);
// console.log(res);