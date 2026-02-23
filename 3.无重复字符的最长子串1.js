

// const s = "abcabcbb";
// s = "pwkew"
s = "abba"

// 实现思路: 滑动窗口 + 哈希表; 
// 遍历字符串, 右指针不断向右移动, 遇到重复字符时, 左指针向右移动直到不重复为止; 每次移动右指针时更新最大长度
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;
    let strt = '';

    for (let right = 0; right < s.length ; right++) {
        const char = s[right];
        if (map.has(char)) {
            // 取max是为了防止左指针回退, 前面有重复字符时，左指针已经移动过了，不能再回退到重复字符的前一个位置
            left = Math.max(map.get(char) + 1, left);
        }
        map.set(char, right);
        strt = s.slice(left, right + 1);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    console.log('最长子串为:', strt, '长度为:', maxLength);

    return maxLength;
};

lengthOfLongestSubstring(s);