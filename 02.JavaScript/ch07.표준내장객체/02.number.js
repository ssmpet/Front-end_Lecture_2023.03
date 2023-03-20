// Number 객체

let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromConstructor.toExponential());

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());// 지수 표시로 문자열 리턴
console.log(pi.toFixed(5));     // 소수점 아래 5자리까지 문자열 리턴
console.log(pi.toPrecision(3)); // 전체 3자리 까지 문자열 리턴


console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) - 1); // Number.MAX_SAFE_INTEGER

