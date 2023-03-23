function rangeCheck(firstNum, secNum) {
    if (isNaN(firstNum) || isNaN(secNum)) return false;
    
    if (firstNum < 1 || firstNum > 20) return false;
    if (secNum < 10 || secNum > 30) return false;
    if (secNum - firstNum < 4) return false;

    return true;
}

function question1() {

    let firstNum = Number(document.getElementById('number1').value);
    let secNum = Number(document.getElementById('number2').value);

    if( !rangeCheck(firstNum, secNum) ) {
        document.getElementById('que1Result').innerHTML = '입력한 숫자가 규칙에 맞지 않습니다.';
        return;
    } 

    let arr = [];
    let result = '<b>';
    let i = 1;
    for (let exp=firstNum; exp <= secNum; exp++) {
        // arr.push(Math.pow(2, exp));
        arr.push(2**exp);
        result += '2<sup>' + exp + '</sup>    ';
        if (i % 10 == 0) result += '<br>';
        i++;        
    }
    result += '<br><br>';

    for (let i = 0; i<arr.length; i++) {
        
        if ( (i+1)%5==0) result += arr[i] +'<br>';
        else result += arr[i] + ', ';
    }
    // arr.join(', ');
    
    result += '</b>'

    document.getElementById('que1Result').innerHTML = result;
}


function question2() {

    let sWord = document.getElementById('searchword').value.trim();
    let strText = document.getElementById('questionTxt').value.trim();

    strText = strText.toLowerCase();
    // strText = strText.replace(/[',.]/g, '').split(' ');
    strText = strText.replace(/[',.]/g, '').replace('[-\n]/g').split(' ');


    let count = 0;
    for( let word of strText ) {
        // if (word.indexOf('the')>=0 && !(word.indexOf('them')>=0 || word.indexOf('there')>=0 || word.indexOf('their')>=0)) {
        if (word == sWord) {
            count++;
        }
    }

    document.getElementById('que2Result').innerHTML = count + '개';

}

function question3() {
    let arrPrice = document.getElementById('price').value.split(';');

    // 방법 1.
    let newArr = [];
    for ( let item of arrPrice ) {
        if (item!='') newArr.push(Number(item));
    }

    // 방법 2.
    // 문제점 : 문자열 끝에 ; 들어가는 것도 포함하여 끝 배열이 NaN 값이 된다.
    // let newArr = arrPrice.map(function(x){ return parseInt(x)});

    // 방법 3.
    // let newArr = arrPrice.map(x => parseInt(x));


    newArr.sort(function(a, b){
        return b-a;
    });

    let result = newArr.join(', ');

    document.getElementById('que3Result').innerHTML = result;
}

function twoDigit(num) {
    return (num<10)?'0'+ num : String(num);
}

function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}

window.onload = function () {

    setInterval(function() {

        const now = new Date();

        let strToday = myDatetime(now);
        
        let strDate = strToday.substring(2, 11);

        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        // let hour = twoDigit(now.getHours()).split('');
        // let min = twoDigit(now.getMinutes()).split('');
        // let sec = twoDigit(now.getSeconds()).split('');

        let hourSrc1 = './images/number' + parseInt(hour/10) + '.png';
        let hourSrc2 = './images/number' + hour%10 + '.png';
        let minSrc1 = './images/number' + parseInt(min/10) + '.png';
        let minSrc2 = './images/number' + min%10 + '.png';
        let secSrc1 = './images/number' + parseInt(sec/10) + '.png';
        let secSrc2 = './images/number' + sec%10 + '.png';
        // let hourSrc1 = './images/number' + hour[0] + '.png';
        // let hourSrc2 = './images/number' + hour[1] + '.png';
        // let minSrc1 = './images/number' + min[0] + '.png';
        // let minSrc2 = './images/number' + min[1] + '.png';
        // let secSrc1 = './images/number' + sec[0] + '.png';
        // let secSrc2 = './images/number' + sec[1] + '.png';


        document.getElementById('todaydate').innerHTML = strDate;

        document.getElementById('hour2').setAttribute('src', hourSrc2);
        document.getElementById('hour1').setAttribute('src', hourSrc1);
        document.getElementById('hour2').setAttribute('src', hourSrc2);
        document.getElementById('min1').setAttribute('src', minSrc1);
        document.getElementById('min2').setAttribute('src', minSrc2);
        document.getElementById('sec1').setAttribute('src', secSrc1);
        document.getElementById('sec2').setAttribute('src', secSrc2);
    }, 1000);

}