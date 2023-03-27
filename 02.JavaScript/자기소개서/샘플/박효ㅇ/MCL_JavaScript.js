/* 홀수 / 짝수 확인 기능 */
function evenOdd() {
    const numTag = document.getElementById('num');
    const numStr = numTag.value;        // string이라 숫자로 바꿔줘야함
    const num = Number(numStr);         // Number(document.getElementById(`num`).value)
    const resTag = document.getElementById('result');

    if (num % 2 == 0) {
        resTag.innerHTML = '<h4>은/는 짝수입니다.</h4>';
    }
    else {
        resTag.innerHTML = '<h4>은/는 홀수입니다.</h4>';
    }
}

/* 만나이 계산 기능 */
function calcFullAge() {
    const bYear = Number(document.getElementById('bYear').value);
    const bMonth = Number(document.getElementById('bMonth').value);
    const bDay = Number(document.getElementById('bDay').value);
    const birthday = `${bYear}-${(bMonth<10)?'0'+bMonth:bMonth}-${(bDay<10)?'0'+bDay:bDay}`;
    const birthTag = document.getElementById('birthday');
        birthTag.innerHTML = birthday;

    const today = new Date();
    const tYear = today.getFullYear();
    const tMonth = today.getMonth() + 1;
    const tDay = today.getDate();
    const curday = `${tYear}-${(tMonth<10)?'0'+tMonth:tMonth}-${(tDay<10)?'0'+tDay:tDay}`;
    const curTag = document.getElementById('curday');
        curTag.innerHTML = curday;

    if (bMonth < tMonth) {
        calcFullAge = tYear - bYear;
    } else if (bMonth > tMonth) {
        calcFullAge = tYear - bYear - 1;
    } else {                    //생월과 현재월이 같은 경우
        if(bDay <= tDay) {
            calcFullAge = tYear - bYear;
        }else {
            calcFullAge = tYear - bYear - 1;
        }
    }
    const fullAge = `${calcFullAge} 세`;
    const fulTag = document.getElementById('fullAge');
        fulTag.innerHTML = fullAge;
}

/* 단순한 디지털 시계 */
 function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

window.onload = function() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('date').innerHTML = myDatetime(now).substring(2,10);
        document.getElementById('time').innerHTML = myDatetime(now).substring(11);
    }, 1000);
}
