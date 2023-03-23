// 역 for 반복문
let sum = 0;
for ( let i=10; i>0; i-- ) {
    sum += i;
    // console.log(`index=${i}, sum=${sum}`);
}

// 1 에서 100까지 홀수의 합
let oddSum = 0;
for( let i=1; i<=10; i+=2 ) {
    oddSum += i;
}

console.log(`1 ~ 10 홀수의 합 = ${oddSum}`);

// 48 에서 10까지 3의 배수의 합
let thSum = 0;
for( let i=48; i>=10; i-=3 ) {
    thSum += i;
    
}
console.log(`48 ~ 10 3의 배수의 합 = ${thSum}`);

let a = [1,2,5,7,8];
a.forEach(function(element, index){
    console.log(index, element);
});