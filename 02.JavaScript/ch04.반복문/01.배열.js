let arr = [52, true, '감', 'banana', 250];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr[0], arr[2], arr[arr.length-1]);

let i = 0;      // index 의미로 i를 주로 사용함
while (i<arr.length) {
    console.log(`index=${i}, value=${arr[i]}`);
    i++;        // while 조건을 변화시키는 값이 무조건 나와야 함
}

for ( let i=0; i<arr.length; i++ ) {
    console.log(`index=${i}, value=${arr[i]}`);
}

// Enhanced for-loop
console.log('Enhanced for-loop');
for(let item of arr)
    console.log(item);