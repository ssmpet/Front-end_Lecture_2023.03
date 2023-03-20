// String 객체

let stringFromLiteral = '안녕하세요?';
let stringFromConstructor = new String('안녕하세요?');

// 속성(attribute, property)
console.log(stringFromLiteral.length);

// 메소드(method)
let str = '안녕하세요?';
console.log(str[0], str.charAt(0));
// console.log(str.charCodeAt(0)); 거의 안씀
console.log(str.concat(' 여러분'));
console.log(str.indexOf('하', 0));  // 2



// 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 한개 표시되는 시간은 몇 초인가?

let sum  = 0;
// 시간
for(let i=0; i<24; i++) {
    if(String(i).indexOf('3') != -1) {
        sum += 3600;
    } else {
        // 분
        for(let i=0; i<60; i++) {
            if(String(i).indexOf('3') != -1)
                sum += 60;
        }
    }
}
console.log(sum);

let totalSecond = 0;
for(let hour=0; hour<24; hour++){
    for(let min=0; min<60; min++){
        let display = hour + ":" + min;
        if(display.indexOf('3') >= 0) // display에 3이 있으면 0 이상인 값을 반환
            totalSecond += 60;
    }
}
console.log(totalSecond);



console.log('pineapple'.lastIndexOf('p'));


// 정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를 ㅋㅋ';
let newStr = sample.replace('A', 'a');
console.log(newStr);
console.log(sample);

newStr = sample.replace(/[A-Z]/,'대');  // 한 개만 바꿈
console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');
console.log(newStr);

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g,'');
console.log(newStr);

// 한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

// 문자열을 분리하여 배열을 반환
let fruitString = '사과,배,감,포도';
let fruitArray = fruitString.split(',');
console.log(fruitArray);


// 문자열 일부분
const today = new Date().toISOString();
console.log(today);  // 2023-03-20T06:52:09.508Z
console.log(today.substring(0, 10));    // 날짜 추출 : 2023-03-20
console.log(today.substring(11, 19));   // 시간 추출 : 06:52:09
console.log(new Date().getHours());

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num<10)?'0'+ num : String(num);
}

function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

let now = myDatetime();
console.log(now);       // 2023-03-20 16:11:32
console.log(now.substring(2));  // 23-03-20 16:11:32, 두 번째 인수를 생략하면 맨 끝까지

console.log('    hello   '.trim()); // 양 끝의 공백을 없애줌

console.log('33'.split('3').length); // ['','','']

// 1에서 1000까지의 숫자가 있다.
// 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가?
console.log('=============================');
let numbers = [0,0,0,0,0,0,0,0,0,0];

for (let i=1; i<=1000; i++) {
    let str = String(i);
    for (let num=0; num<10; num++) {
        numbers[num] += str.split(num).length-1;
    }
}

// console.log(numbers);
for (let i=0; i<10; i++) {
    console.log(`${i} 는 ${numbers[i]}개 사용되었습니다.`);
}

console.log('=============================');
let strNumber = '';
for (let i=1; i<=1000; i++)  strNumber += i;
for (let num=0; num<10; num++) {
    console.log(`${num} 는 ${strNumber.split(String(num)).length-1}번 사용되었습니다.`);
}

console.log('=============================');
// isPalindrome 함수 만들기

function isPalindrome(basicStr) {
    let lenStr = parseInt(basicStr.length/2);
    
    for( let nStart=0; nStart<lenStr; nStart++) {
        if (basicStr[nStart]!=basicStr[basicStr.length-1-nStart])
            return false;
    }

    return true;
}
if(isPalindrome('SdeOedS')) console.log('isPalindrome 입니다.');
else console.log('isPalindrome가 아닙니다.');

function isPalindrome2(str) {
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--)
        reverseStr += str[i];
    return str == reverseStr;
}
console.log(isPalindrome2('우영우'));

console.log('=============================');
// C:\\Program Files\\node.js\\node.exe에서 파일명만 출력하세요.
let path =  'C:\\Program Files\\node.js\\node.exe';
let newPStr = path.split('\\');
console.log(newPStr[newPStr.length-1]);

let index = path.lastIndexOf('\\');
let filename = path.substring(index+1);
console.log(filename);
