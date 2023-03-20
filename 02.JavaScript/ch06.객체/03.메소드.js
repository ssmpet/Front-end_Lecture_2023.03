let obj = {
    // 속성(attribute)
    name: '사과', 
    price: 1000,

    // 메소드(method)
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)
    }
};

obj.print();

console.log(null);          // null
console.log(typeof null);   // object

let zeroNumber = 0;
let falseBoolean = '';
let emptyString = '';
let undefinedValue;
let nullValue = null;

if (zeroNumber == null) console.log('0은 존재하지 않는 값입니다.');
if (falseBoolean == null) console.log('false는 존재하지 않는 값입니다.');
if (emptyString == null) console.log('emptyString는 존재하지 않는 값입니다.');
if (undefinedValue == null) console.log('undefinedValue는 존재하지 않는 값입니다.');
if (nullValue == null) console.log('nullValue는 존재하지 않는 값입니다.');