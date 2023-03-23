$(document).ready(function() {

    $('.question1').click(question1);
    $('.question2').click(question2);
    $('.question3').click(question3);

    question4();
    setInterval(function() {
        question4();
    }, 1000);

});

function rangeCheck(firstNum, secNum) {

    if (isNaN(firstNum) || isNaN(secNum)) return false;
    if (firstNum < 1 || firstNum > 20) return false;
    if (secNum < 10 || secNum > 30) return false;
    if (secNum - firstNum < 4) return false;

    return true;
}

function question1() {
    
    let firstNum = Number($('#number1').val());
    let secNum = Number($('#number2').val());
    

    if( !rangeCheck(firstNum, secNum) ) {
        $('#que1Result').html('입력한 숫자가 규칙에 맞지 않습니다.');
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

    $('#que1Result').html(result);
}


function question2() {

    let sWord = $('#searchword').val().trim();
    let strText = $('#questionTxt').val().trim();

    strText = strText.toLowerCase();
    strText = strText.replace(/[',.]/g, '').replace('[-\n]/g').split(' ');

    let count = 0;
    for( let word of strText ) {
        if (word == sWord) {
            count++;
        }
    }

    $('#que2Result').html(count+"개");

}

function question3() {
    
    let arrPrice = $('#price').val().split(';');

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

    $('#que3Result').html(result);
}

function twoDigit(num) {
    return (num<10)?'0'+ num : String(num);
}

function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}

function question4() {

    const now = new Date();

    let strToday = myDatetime(now);

    // strToday.substring(2, 11);    // 23-03-34
    let strDate = strToday.substring(2, 4) + '년 ' + strToday.substring(5, 7) + '월 ' + strToday.substring(8, 10) + '일';
    let strTime = strToday.substring(11, 19);   // 16:27:00

    let hourSrc1 = './images/number' + strTime[0] + '.png';
    let hourSrc2 = './images/number' + strTime[1] + '.png';
    let minSrc1 = './images/number' + strTime[3] + '.png';
    let minSrc2 = './images/number' + strTime[4] + '.png';
    let secSrc1 = './images/number' + strTime[6] + '.png';
    let secSrc2 = './images/number' + strTime[7] + '.png';


    $('#todaydate').html(strDate)
                    .css('fontSize', '130%');

    $('#hour2').attr('src', hourSrc2);
    $('#hour1').attr('src', hourSrc1);
    $('#hour2').attr('src', hourSrc2);
    $('#min1').attr('src', minSrc1);
    $('#min2').attr('src', minSrc2);
    $('#sec1').attr('src', secSrc1);
    $('#sec2').attr('src', secSrc2);
}
