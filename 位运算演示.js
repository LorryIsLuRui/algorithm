// 位运算演示：左移运算符 <<

console.log('=== 基础左移运算 ===');
console.log('1 << 0  =', 1 << 0, ' (2的0次方)');
console.log('1 << 1  =', 1 << 1, ' (2的1次方)');
console.log('1 << 2  =', 1 << 2, ' (2的2次方)');
console.log('1 << 3  =', 1 << 3, ' (2的3次方)');
console.log('1 << 10 =', 1 << 10, ' (2的10次方)');
console.log('1 << 31 =', 1 << 31, ' (2的31次方)');

console.log('\n=== 等价性验证 ===');
console.log('1 << 31 === 2 ** 31:', (1 << 31) === (2 ** 31));
console.log('实际值:', 1 << 31);

console.log('\n=== 32位整数边界 ===');
const MIN_INT32 = -(1 << 31);
const MAX_INT32 = (1 << 31) - 1;

console.log('最小值 -(1 << 31)     =', MIN_INT32);
console.log('最小值 -(2 ** 31)     =', -(2 ** 31));
console.log('最大值 (1 << 31) - 1  =', MAX_INT32);
console.log('最大值 2 ** 31 - 1    =', 2 ** 31 - 1);

console.log('\n=== 二进制表示 ===');
// JavaScript 中可以用 toString(2) 查看二进制
console.log('1 的二进制:');
console.log('  ', (1).toString(2).padStart(32, '0'));

console.log('1 << 5 (32) 的二进制:');
console.log('  ', (1 << 5).toString(2).padStart(32, '0'));

console.log('1 << 10 (1024) 的二进制:');
console.log('  ', (1 << 10).toString(2).padStart(32, '0'));

console.log('\n=== 左移的数学本质 ===');
console.log('左移 n 位 = 乘以 2^n');
console.log('5 << 3 = 5 × 2³ = 5 × 8 =', 5 << 3);
console.log('7 << 4 = 7 × 2⁴ = 7 × 16 =', 7 << 4);

console.log('\n=== 其他位运算符 ===');
console.log('右移 >> :');
console.log('  16 >> 2 = 16 / 4 =', 16 >> 2, ' (除以2²)');
console.log('  100 >> 3 = 100 / 8 =', 100 >> 3, ' (除以2³)');

console.log('\n按位与 & :');
console.log('  5 & 3 =', 5 & 3, ' (二进制: 101 & 011 = 001)');

console.log('\n按位或 | :');
console.log('  5 | 3 =', 5 | 3, ' (二进制: 101 | 011 = 111)');

console.log('\n按位异或 ^ :');
console.log('  5 ^ 3 =', 5 ^ 3, ' (二进制: 101 ^ 011 = 110)');

console.log('\n按位取反 ~ :');
console.log('  ~5 =', ~5, ' (二进制位全部翻转)');
