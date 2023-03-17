// numbers 배열에서 짝수를 찾으면 반복문을 탈출
let numbers = [3, 57, 25, 48, 83, 79];
let i = 0;
while(true){

    if (i==numbers.length || numbers[i] % 2 == 0) break;
    console.log(numbers[i]);
    i++;
}

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0)
        break;
    console.log(numbers[i]);
}

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++){
        if (k==2) 
            break;  // A 위치로 한 단계만 탈출함
    }
    // A 위치
}
// B 위치
