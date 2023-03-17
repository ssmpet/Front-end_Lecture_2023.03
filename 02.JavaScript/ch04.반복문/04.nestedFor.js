// 사각형 그리기
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < 5; k++) {
        star += '*';
    }
    // console.log(star);
}


// 별모양 그리기 (1사분면)
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < i; k++) {
        star += '*';
    }
    console.log(star);
}

// 별모양 그리기 (4사분면)
for (let i = 5; i >= 0; i--) {
    let star = '';
    for (let k = 0; k < i; k++) {
        star += '*';
    }
    console.log(star);
}


// 별모양 그리기 (2사분면)
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < 5-i; k++) {     // 5-i 개 만큼 공백 만들기
        star += ' ';
    }

    for (let k = 0; k < i; k++) {       // i 개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}


// 별모양 그리기 (3사분면)
for (let i = 5; i >= 1; i--) {
    let star = '';
    for (let k = 0; k < 5-i; k++) {     // 5-i 개 만큼 공백 만들기
        star += ' ';
    }

    for (let k = 0; k < i; k++) {   
        star += '*';
    }
    console.log(star);
}
