// 홀수/짝수
// Math.random()
// Math.ceil()
// Math.floor()

let num = Math.ceil(Math.random() * 100); // 1~100사이의 정수값

if (num % 2 == 1) {
    console.log(`${num} 은/는 홀수입니다.`);
}
if (num % 2 == 0){
    console.log(`${num} 은/는 짝수입니다.`);
}


