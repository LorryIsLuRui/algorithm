// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/solution/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-by-3zqv5/
/**
 * @param {string} s
 * @return {character}
 */
// 1. 遍历两遍
/**
 * 1. 遍历字符串, 得到每个字符与出现次数的映射
 * 2. 遍历映射,得到只出现一次的字符
 * 
 */
// 2.类hash
 var firstUniqChar = function(s) {
    const map = {}; // 可以用hash
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (Math.abs(map[char]) >= 0) { // 说明是重复元素
            map[char] = -1;
            continue;
        } else {
            map[char] = i;
        }
    }
    let idx = s.length;
    for (const char in map) {
        if (map[char] > -1 && map[char] < idx) {
            idx = map[char];
        }
    }
    return idx < s.length && s.length ? s[idx] : ' ';
};
// TODO: 3. 借助队列


//  error 1. 每次遍历存储字符,只要出现重复的字符,停止记录,然后返回上一个记录的字符
/** 
 * var firstUniqChar = function(s) {
    let res = ' ';
    const map = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char] >= 0) {
            return map[char] - 1 >=0 ? s[map[char] - 1] : s[map[char] + 1];
        } else {
            map[char] = i;
        }
    }
    return res;
};
 */
console.log(firstUniqChar("leetcode"));