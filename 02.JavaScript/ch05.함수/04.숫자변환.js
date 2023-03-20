// 숫자 변환 내장(build-in) 함수

const a = '123.65', b = '0xff', c = '23';

console.log(Number(a), Number(b), Number(c));
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c)); // 255, 0, 23

console.log(parseInt('1401동'), Number('1401동'));  // 1401, NaN
console.log(parseInt('1401동503호')); // 1401

