// 最优解：KMP算法 - O(n)

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (s.length <= 1) return s;
    
    // 构造新字符串: s + "#" + reverse(s)
    const rev = s.split('').reverse().join('');
    const newStr = s + '#' + rev;
    
    console.log(`原字符串: "${s}"`);
    console.log(`反转字符串: "${rev}"`);
    console.log(`构造字符串: "${newStr}"`);
    
    // 计算KMP的next数组（失配数组）
    const next = getNext(newStr);
    
    console.log('Next数组:', next);
    
    // next数组最后一个值就是s和reverse(s)的最长公共前后缀
    // 即从开头开始的最长回文长度
    const longestPalindromeLen = next[newStr.length - 1];
    
    console.log(`最长回文前缀长度: ${longestPalindromeLen}`);
    console.log(`最长回文前缀: "${s.slice(0, longestPalindromeLen)}"`);
    
    // 需要添加的部分：s中不是回文前缀的部分
    const suffix = s.slice(longestPalindromeLen);
    const add = suffix.split('').reverse().join('');
    
    console.log(`后缀部分: "${suffix}"`);
    console.log(`反转后添加: "${add}"`);
    
    const result = add + s;
    console.log(`最短回文串: "${result}"\n`);
    
    return result;
};

/**
 * 计算KMP算法的next数组
 * next[i]表示str[0...i]的最长相同前后缀的长度
 */
function getNext(str) {
    const n = str.length;
    const next = new Array(n).fill(0);
    
    // j是前缀的末尾位置（也是当前最长相同前后缀的长度）
    let j = 0;
    
    // i是后缀的末尾位置
    for (let i = 1; i < n; i++) {
        // 如果不匹配，回退j
        while (j > 0 && str[i] !== str[j]) {
            j = next[j - 1];
        }
        
        // 如果匹配，j++
        if (str[i] === str[j]) {
            j++;
        }
        
        // 记录当前位置的最长相同前后缀长度
        next[i] = j;
    }
    
    return next;
}

// ==================== 测试 ====================

console.log('=== 测试1: aacecaaa ===');
shortestPalindrome("aacecaaa");

console.log('=== 测试2: abcd ===');
shortestPalindrome("abcd");

console.log('=== 测试3: aba (已经是回文) ===');
shortestPalindrome("aba");

console.log('=== 测试4: abacabad ===');
shortestPalindrome("abacabad");
