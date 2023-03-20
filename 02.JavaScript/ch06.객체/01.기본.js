// 객체(Object)

// 배열(Array)
let fruits = ['딸기', '사과', '수박', '참외', [1,2,3,4]];
console.log(typeof fruits);

let fruitObj = {0:'딸기', 1:'사과', 2:'수박', 3:'참외'}; // 키(인덱스): 밸류
console.log(fruits[0], fruitObj[1], fruits[4][1]);

// 객체(Object, Python dictionary, Java Map)
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0];
let personInfo = {  
    name : '제임스',    // key가 string인 경우 따옴표 생략 가능 
    age : 28,
    gender : '남자', 
    height : 175,
    job : '프로그래머',
    bmi : 30.0
};
console.log(personArray);
console.log(personInfo);

// 객체에 대한 접근
console.log(personInfo['name']);    // 이런 식으로는 사용하지 않음
console.log(personInfo.name);       // 대부분 이렇게 사용함
let strkey = 'age';
console.log(personInfo[strkey]);
console.log(personInfo.age);
