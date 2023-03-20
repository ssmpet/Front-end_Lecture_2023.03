// 타이머 내장 함수


setTimeout(function(){
    console.log('3초 경과');
}, 3000);
const threeSeconds = function() {
    console.log('3초 경과');
}
setTimeout(threeSeconds, 3000);



console.log(new Date);
const si = setInterval(function(){
    console.log(new Date);
}, 1000); 

setTimeout(function(){
    clearInterval(si);
}, 5100);