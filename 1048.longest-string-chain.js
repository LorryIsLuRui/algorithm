/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 */

// @lc code=start
const strIsPred = (str, val) => {
    let index = 0;
    if (str.length - val.length !== 1) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === val[index]) {
            index += 1;
        }
    }
    return val.length === index;
}
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const len = words.length;
    const ans = new Array(len).fill(1);
    words.sort((a, b) => a.length - b.length);
    for (let i = 1; i < len; i++) {
        const ele1 = words[i];
        for (let j = 0; j < i; j++) {
            const ele2 = words[j];
            if (strIsPred(ele1, ele2)) {
                ans[i] = Math.max(ans[i], ans[j] + 1);
            }
        }
    }
    return Math.max(...ans);
};
// const arr = ["a","b","ba","bca","bda","bdca"]; // 4
const arr = ["a","b","ab","bac"]; // 2
// const arr = ["xbc","pcxbcf","xb","cxbc","pcxbc"]; // 5
// const arr = ["abcd","dbqca"]; // 1
const res = longestStrChain(arr);
console.log(res);
// @lc code=end

// var longestStrChain = function(words) {
//     let result = 0;
//     const map = {};
//     const len = words.length;
//     for (let i = 0; i < len; i++) {
//         let ele = words[i];
//         const ans = [ele];
//         map[ele] = ans;
//         const leave = [...words.slice(0, i), ...words.slice(i + 1)];
//         let pre = ele;
//         while (leave.length > 0) {
//             let next = '';
//             const idx = predecessorIdx(leave, pre);
//             if (idx > -1) {
//                 next = leave[idx];
//                 ans.push(next);
//                 pre = next;
//             }
//             leave.splice(idx, 1);
//         }
//         if (leave.length === 0) {
//             result = Math.max(result, ans.length);
//         }

//     }
//     return result;
// };

// 参考
// https://leetcode-cn.com/problems/longest-string-chain/solution/dong-tai-gui-hua-by-lwlvhy-6ghj/

// class Solution {
//     public:
//         //判断两个字符串：str1是否为str2的前身
//         bool check(string& str1,string& str2){
//             if(str2.size()-str1.size()!=1){
//                 return false;
//             }
//             int index=0;
//             for(int i=0;i<str2.size();i++){
//                 if(str2[i]==str1[index]){
//                     index++;
//                 }
//             }
//             if(index==str1.size()){
//                 return true;
//             }
//             return false;
//         }
//         int longestStrChain(vector<string>& words) {
//             int length=words.size();
//             //对字符串数组按照长度由小到大的顺序进行排序
//             sort(words.begin(),words.end(),[](const auto& str1,const auto& str2){return str1.size()<str2.size();});
//             //初始化动态规划的数组为1.
//             vector<int>dp(length,1);
//             for(int i=1;i<length;i++){
//                 for(int j=0;j<i;j++){
//                     if(check(words[j],words[i])){
//                         //以words里面下标为i结尾的形成的词链的最长可能长度
//                         dp[i]=max(dp[i],dp[j]+1);
//                     }
//                 }
//             }   
//             //返回结果。     
//             return *max_element(dp.begin(),dp.end());
//         }
//     };