// 조건 연산자, 3항 연산자
let num = 8;
let evenOdd = (num%2==0)?'짝수':'홀수';
console.log(`${num} 은/는 ${evenOdd} 입니다.`);

let variable;
variable = (typeof(variable)=='undefined')?0:variable;
console.log(variable);