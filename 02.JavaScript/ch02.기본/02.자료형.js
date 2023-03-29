// 자바스크립트의 자료형
// 1. Number
console.log(5 / 2);
console.log(5 % 2);     // modulo, 나머지 계산
console.log(10 / 3);
console.log(2 ** 10);   // 2의 10제곱, 1024
console.log(1.3e8);     // 1.3 X 10**8
console.log(1.3e-8);

console.log("This is 'String'");
console.log('This is "String"');
console.log("This is \t\"String\"");
console.log('This is \'String\'');
console.log("동해물과 백두산이\n마르고 닳도록");
console.log("Back slash(\\) 기호를 사용할 때는 \\ 두 개를 쓰면 됩니다.")

let hello = '안녕하세요?';
console.log(hello[0], hello[5]);

// template literal(`)
let a = 2, b = 3;
console.log(a + ' 더하기 '+ b + ' 을 한 결과는', a+b, '입니다.');
console.log(a, ' 더하기 ', b , '을 한 결과는', a+b, '입니다.');
console.log(`${a} 더하기 ${b}을 한 결과는 ${a+b} 입니다.`);
console.log(`This is 'String'`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`)

// 2. 논리형
console.log(typeof(true), typeof false); //boolean
console.log(2==2.0, 5>=4, '가나다'>'마바사', 'g'>'a' ) // true, true, false, true
console.log(2==2.0, 5>=4, !('가나다'>'마바사'), 'g'>'a' ) // true, true, false, true

let x = 10;
console.log(x > 8 || x < -3);   //x > 8 또는 x < -3
console.log(x >= 0 && x <= 5);  // 0 <= x  <=5
console.log(true>10);   // true가 1로 자동 변환된어 비교가 됨

let hours = (new Date()).getHours();
console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8);

let pi = 3.12159265;
let radius = 10;

console.log('둘레 : ', 2*pi*radius);
console.log('면적 : ', pi * radius**2);
console.log(`면적 : ${pi * radius**2}`);

a = 1;
a += 2;     // a = a + 2
console.log(a);

let  output = "hello ";
output += "world ";
output += "!";
console.log(output);

let str = '';
str += 'A quick brown fox';
str += ' ' + 'jumps over the lazy dog';
console.log(str);

// 3. 증감 연산자
x=0;
let y=0;
console.log(x++, ++y);  // post-increment, pre-increment
console.log(x, y);
console.log(x--, --y);  // post-decrement, pre-decrement
console.log(x, y);

// 세 자리수 정수 두 개를 곱한 결과ㅏ 
// Palindrome이 되는 가장 큰 수는? (회문)
// Perfect Number : 자기 자신을 제외한 약수의 합 = 자기자신

// 나머지 자료형
// 4. 함수(function)
console.log( typeof function(){} );
console.log( typeof( () => {}) ); // 화살표(arrow) 함수, 람다 함수

// 5. 객체(object)
let obj = {x:1, y:2};
console.log(typeof obj);
console.log(obj.x, obj.y);

// 6. undefined
let alpha;
console.log(typeof alpha); //초기화하지 않은 변수, 선언하지 않은 변수
alpha = 123;
console.log(typeof alpha);