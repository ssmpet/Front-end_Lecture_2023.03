// Perfect Number
// 자기 자신을 제외한 약수의 합 = 자기자신
// 2 ~ 10000 까지의 완전수는 4개

function sumOfDeivisors(num) {
    let sum = 0;
    
    for(let i=1; i<num; i++) {
        if(num % i == 0) sum += i;
    }

    return sum;
}

// 2 ~ 10000 까지의 완전수 구하기
for(let i=2; i<=10000; i++) {
    if(i == sumOfDeivisors(i))
        console.log(i);
}

