// Call back 함수
function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}

// 익명 함수 선언
const cb = function() {
    console.log('함수가 호출되었음.');
}

callFiveTimes(cb);

callFiveTimes(function() {
    console.log('익명 함수가 호출되었음.');
});