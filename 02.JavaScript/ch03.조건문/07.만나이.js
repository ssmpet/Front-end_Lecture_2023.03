// 생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth = 4, bDay = 17;

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();
console.log(tYear, tMonth, tDay);


let nResult = tYear-bYear;
if ( tMonth<bMonth || (tMonth==bMonth && tDay<bDay) ) nResult--;
console.log(`만 ${nResult}`);
