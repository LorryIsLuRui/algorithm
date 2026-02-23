// #数字字符串转化成IP地址#
// 1. 暴力解法 for循环
const validate = (str, n) => str.length === n
    && (str.length > 1 ?
        !!(+str[0] > 0 && +str < 256):
        +str >= 0);
const restoreIpAddresses1 = s => {
    let ip = '';
    const ans = [];
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let m = 1; m <= 3; m++) {
                for (let n = 1; n <= 3; n++) {
                    if(m + n + j + i === s.length) {
                        const s1 = s.substr(0, i);
                        const s2 = s.substr(i, j);
                        const s3 = s.substr(i + j, m);
                        const s4 = s.substr(i + j + m, n);
                        if (validate(s1, i) && validate(s2, j) && validate(s3, m) && validate(s4, n)) {
                            ip = `${s1}.${s2}.${s3}.${s4}`;
                            ans.push(ip);
                        }
                    }
                }
            }
        }   
    }
    return ans;
};
const createPosNum = (s, index, count) => s.substr(index, count);
const restoreIpAddresses = s => {
    let ans = [];
    const list = [];
    const addNext = (posIdx = 1, ans = [], list = []) => {
        const posNums = [];
        if (posIdx === 1) {
            for (let j = 1; j <= 3; j++) {
                let str = createPosNum(s, 0, j);
                if (validate(str, j)) {
                    posNums.push(`${str}.`);
                }
            }
            list.push(posNums);
        }
        if (posIdx === 5) {
            const all = list[3];
            for (let i = 0; i < all.length; i++) {
                if (all[i].length - 3 === s.length) {
                    ans.push(all[i]);
                }
            }
            return ans;
        }
        if (posIdx > 1){
            // 判断是否有上一个,有的话进行拼接
            const eleArr = list[posIdx - 2];
            for(let k = 0; k < eleArr.length; k++) {
                const ele = eleArr[k];
                const len = ele.length - posIdx + 1;
                for (let j = 1; j <= 3; j++) {
                    let str = createPosNum(s, len, j);
                    if (validate(str, j)) {
                        str = `${ele}${str}${posIdx !== 4 ? '.' : ''}`;
                        posNums.push(str);
                    }
                }
            }
            list[posIdx - 1] = posNums;
        }
        return addNext(posIdx + 1, ans, list);
    };
    addNext(1, ans, list);
    return ans;
};
// const s = '64791';
// const res = restoreIpAddresses(s);