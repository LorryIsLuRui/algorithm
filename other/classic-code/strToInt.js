// CC141 把字符串转换成整数(atoi)
// https://www.nowcoder.com/practice/d11471c3bf2d40f38b66bb12785df47f?tpId=46&&tqId=29170&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking
// q12 -> 0 5+-5->5 2e3->2
const strToInt = str => {
    str = str.replace(/(^\s*)|(\s*$)/igm, ''); // 去掉前后空格
    let symbols = '+';
    const symReg = /^(\+|\-)/;
    const symRes = symReg.exec(str);
    let symIdx = 0;
    const concatSymbol = (sym, num) => /\-/.test(sym) ? ('-' + num) : Math.abs(num);
    if (symRes) {
        symbols = symRes[0]; // 获取符号
        symIdx = symRes.index + 1;
    } else {
        if (!(/^[0-9]/.test(str))) {
            return 0
        }
    }
    str = str.slice(symIdx);
    const numsReg = /^[0-9]+/g;
    let pureNums = str.match(numsReg) ? str.match(numsReg).join('') : '';
    if (pureNums && /\+/.test(symbols) && pureNums >= Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (pureNums && /\-/.test(symbols) && pureNums >= Math.pow(2, 31)) {
        return Math.pow(-2, 31);
    }
    if (!pureNums) {
        return 0
    }
    pureNums = pureNums.replace(/^0+/, '');
    return concatSymbol(symbols, pureNums);
}
// const res = strToInt('1-e2'); // 1
// const res = strToInt('q12'); // 0
// const res = strToInt('1w2'); //1
// const res = strToInt('5+-5'); // 5
// const res = strToInt('+82'); // 82
// const res = strToInt('+-5'); // 0
// const res = strToInt('0'); // 0
// const res = strToInt('000034'); // 34
// const res = strToInt('2147483648'); // 2147483647
// const res = strToInt('-2147483647'); // -2147483647
// const res = strToInt('-9876543211111'); // -2147483647
console.log(res);