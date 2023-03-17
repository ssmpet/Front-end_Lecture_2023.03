//  백준도장 2739번 구구단
console.log('------------------------------------------------------');

let nSep = 9;

for (let i=1; i<10; i++) {
    console.log(`${nSep} * ${i} = ${nSep*i}`)
}

console.log('------------------------------------------------------');

// 백준도장 2884번 알람 시계
// 두 정수 nH : 시간, nM : 분
let nHour = 1, nMin = 30;
let newHour = 0, newMin = 0;
console.log(`상근이가 설정한 알람시간 : ${nHour}:${nMin}`);

newHour = nHour;
newMin = nMin - 45;
if ( newMin < 0 ){
    newMin = 60 + newMin;
    newHour = (newHour==0)?23:nHour-1;
}

console.log(`창영이의 방법으로 설정된 알람시간 : ${newHour}:${newMin}`);

console.log('------------------------------------------------------');
/* 
백준도장 2480번 주사위 문제
단, 주사위 3개의 눈은 입력을 통해서 받지 말고, 랜덤 넘버로 만들 것
let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));
 */

let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));

let totalPrice=0;
let numDice=0;
let nSameNumber=0;

if( dice1==dice2 && dice2==dice3 ) {
    numDice = 3;
    nSameNumber = dice1;
} else {
    numDice = 2
    if( dice1==dice2 )
        nSameNumber = dice1;
    else if (dice2==dice3)
        nSameNumber = dice2;
    else if (dice3==dice1)
        nSameNumber = dice3;
    else
        numDice = 1;
}

switch (numDice) {

    case 3:
        totalPrice = 10000 +  nSameNumber * 1000;
        break;
    case 2:
        totalPrice = 1000 +  nSameNumber * 1000;
        break;
    default:
        // 가장 큰 수 구하기
        let addr = [];
        addr.push(dice1);
        addr.push(dice2);
        addr.push(dice3);
        nSameNumber = 0;
        for ( let number of addr ) {
            if( nSameNumber<number ) nSameNumber=number;
        }
        totalPrice = 100 + nSameNumber * 100;
        break;
}

console.log(`첫 번째 주사위 수 : ${dice1}\n두 번째 주사위 수 : ${dice2}\n세 번째 주사위 수 : ${dice3}\n총 상금: ${totalPrice}원`);
console.log('------------------------------------------------------');

// 삼각형 세변을 a,b,c ( a<b<c )라 하고
// a + b + c = 1000 을 만족하는 직각삼각형의 세변을 구하시요.
//  a^2 + b^2 = c^2

for( let a=1; a<=1000; a++ ) {
    for(let b=a+1; b<=1000; b++) {
        c = 1000 - a - b;
        if ( a*a + b*b == c*c ) {
            console.log(a, b, c, a+b+c);
        }
    }
}