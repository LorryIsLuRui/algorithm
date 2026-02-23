// 1.字符串遍历
var reverseLeftWords = function(s, n) {
    let res = '';
    for (let i = n; i < s.length; i++) {
        res += s[i];
    }
    for (let i = 0; i < n; i++) {
        res += s[i];
    }
    return res;
};