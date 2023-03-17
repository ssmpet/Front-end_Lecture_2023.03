// 배열에서 최대 최소값 찾기
let numbers = [13, 57, 25, 48, 7, 83, 79, 61, 22, 49];
let minVal = 10000, maxVal = 0;

for ( let i = 0; i < numbers.length; i++ ) {
    if ( maxVal < numbers[i] ) 
        maxVal = numbers[i];
}
for ( let number of numbers ) {
    if ( minVal > number )
        minVal = number;
}
console.log(`maxVal = ${maxVal}, minVal = ${minVal}`);

// 동시에 찾기
maxVal = numbers[0];
minVal = numbers[0];
for ( let number of numbers ) {
    if( maxVal < number ) maxVal = number;
    if( minVal > number ) minVal = number;
}
console.log(`maxVal = ${maxVal}, minVal = ${minVal}`);
