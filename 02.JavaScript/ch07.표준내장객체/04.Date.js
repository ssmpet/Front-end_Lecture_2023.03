// Date 객체 생성 방법

// 1. 현재 날짜/시간

let today = new Date();
console.log(today);     // 2023-03-21T00:17:53.793Z
console.log(today.toDateString()); // Tue Mar 21 2023
console.log(today.toLocaleString()); // Timezone 반영됨, 2023. 3. 21. 오전 9:19:02

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num<10)?'0'+ num : String(num);
}
/*
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}
*/
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}


// console.log(myDatetime());  // 2023-03-21 09:23:48


// 2. Unix time 기준(1970.1.1 이후 ms 단위)
let unixDay = new Date(1.6794e12);  // 2023-03-21T12:00:00.000Z
console.log(unixDay);

// 3. 문자열 기반
let strDate = new Date('2023-03-21 09:25:00');
console.log(strDate);       // 2023-03-21T00:25:00.000Z

// 4. 날짜/시간 요소 기반. 구하는 월에서 -1을 해 줘야 함
// let elementDay = new Date(2023, 2, 21, 9, 30, 0, 0);
let elementDay = new Date(2023, 2, 21, 9, 30);  // 시간 단위를 생략하면 0으로 대체됨
console.log(elementDay);    // 2023-04-21T00:30:00.000Z


// 시간 연산
// 더하기 / 빼기
today.setDate(today.getDate() + 100);   
console.log(myDatetime(today));         // 2023-06-29 09:41:49
today.setDate(today.getDate() - 100);
console.log(myDatetime(today));         // 2023-03-21 09:41:49

// 오늘 : 1년 2개월 3일 후  
let date = new Date();                      // 오늘 2023-03-21 09:45:46
date.setFullYear(date.getFullYear() + 1);   // 1년 후
date.setMonth(date.getMonth() + 2);         // 2개월 후
date.setDate(date.getDate() + 3);           // 3일 후 
console.log(myDatetime(date));              // 2024-05-24 09:45:46

// 시간 간격
let chrismas = new Date(2023, 2, 22);
let diffMs = chrismas.getTime() - today.getTime();
let diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

// 수능일 : 2023-11-16
diffMs = new Date(2023, 10, 16).getTime() - today.getTime();
diffDay = Math.ceil(diffMs/(24 * 60 * 60 * 1000));
console.log(diffDay); // 240

// 어제 날짜
diffMs =  today.getTime() - new Date(2023, 2, 20).getTime();
diffDay = Math.floor(diffMs/(24 * 60 * 60 * 1000));
console.log(diffDay); // 1
