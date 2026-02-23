// 搅乱字符串
// https://www.nowcoder.com/practice/2bdc44bb0186468b8d8c13ea5d3a9e58?tpId=46&&tqId=29091&rp=1&ru=/ta/classic-code&qru=/ta/classic-code/question-ranking

var isScramble = function(s1, s2) {
    if(s1===s2)return true
    let hashCheck=check(s1,s2)
    if(!hashCheck)return false
    let len=s1.length
    for(let i=1;i<len;i++){
        let result=false
        let left1=s1.substring(0,i),right1=s1.substring(i),
            left2=s2.substring(0,i),right2=s2.substring(i)
        result=isScramble(left1,left2) && isScramble(right1,right2) ||
                isScramble(left1,s2.substring(len-i)) && isScramble(right1,s2.substring(0,len-i))
        if(result)return true
    }
    return false
    function check(s1,s2){
        let hash={}
        for(let n of s1){
            if(hash[n]==null)hash[n]=1
            else hash[n]++
        }
        for(let n of s2){
            if(!hash[n])return false
            else hash[n]--
        }
        return true
    }
};
const res = isScramble('coder', 'erdoc');
console.log(res);