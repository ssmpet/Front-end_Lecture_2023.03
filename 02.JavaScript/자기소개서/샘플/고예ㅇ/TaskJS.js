const jscard = document.querySelector('.jscard#card02');
const circle1 = jscard.querySelector('.circle1');
const circle2 = jscard.querySelector('.circle2');
const cardtxt = document.querySelectorAll('.jscard .cardtxt');

/*  버튼 클릭 시 배경화면 컬러 변경 구현 */
function changeBg() {
  let body = document.body;
  if (body.id == 'beige') {
    let bg = document.querySelectorAll('#beige');
    for (let a of bg) {
      a.setAttribute('id', 'purple');
      a.style = `transition: all 0.8s;`;
      cardtxt[0].style = `opacity: 1; transition: opacity 0.4s cubic-bezier(0, 0, 0.5, 1);`;
      cardtxt[1].style = `opacity: 0; transition: opacity 0.4s cubic-bezier(0, 0, 0.5, 1);`;
    }
  } else {
    let pp = document.querySelectorAll('#purple');
    for (let a of pp) {
      a.setAttribute('id', 'beige');
      a.style = `transition: all 0.8s;`;
      cardtxt[0].style = `opacity: 0; transition: opacity 0.4s cubic-bezier(0, 0, 0.5, 1);`;
      cardtxt[1].style = `opacity: 1; transition: opacity 0.4s cubic-bezier(0, 0, 0.5, 1);`;
    }
  }
}

function myDatetime(date) {
  return `${date.getHours().toString().padStart(2, 0)}${date.getMinutes().toString().padStart(2, 0)}${date
    .getSeconds()
    .toString()
    .padStart(2, 0)}`;
}

function EndCourseTime() {
  const dDay = new Date('2023-04-03');
  const now = new Date();
  const diff = dDay - now;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  return `${diffDay.toString().padStart(2, 0)}${diffHour.toString().padStart(2, 0)}${diffMin
    .toString()
    .padStart(2, 0)}${diffSec.toString().padStart(2, 0)}`;
}

let screenW = window.innerWidth;
const mViewtxt = document.querySelectorAll('#mview');

window.onload = function () {
  // timer
  setInterval(() => moveClock(), 1500);
  setInterval(() => {
    const TIMERTEXT = document.querySelectorAll('.timer');
    let DATE = EndCourseTime();
    for (let i = 0; i < TIMERTEXT.length; i++) {
      TIMERTEXT[i].innerHTML = DATE[i];
    }
  }, 1000);

  // 인트로 이미지
  setInterval(() => {
    const hideimg = document.querySelector('#hideimg');
    const showimg = document.querySelector('#showimg');
    hideimg.id = 'showimg';
    showimg.id = 'hideimg';
  }, 2000);

  if (screenW <= 768) {
    mViewtxt[0].innerHTML = `PC Verson View`;
    mViewtxt[1].innerHTML = `PC 버전 보기`;
    document.querySelector('#card03').setAttribute('onclick', 'mWindow(1920)');
  } else {
    mViewtxt[0].innerHTML = `Mobile Verson View`;
    mViewtxt[1].innerHTML = `모바일 버전 보기`;
    document.querySelector('#card03').setAttribute('onclick', 'mWindow(390)');
  }
};

window.onresize = function (event) {
  // pc,m 버전
  if (screenW <= 768) {
    mViewtxt[0].innerHTML = `PC Verson View`;
    mViewtxt[1].innerHTML = `PC 버전 보기`;
    document.querySelector('#card03').setAttribute('onclick', 'mWindow(1920)');
  } else {
    mViewtxt[0].innerHTML = `Mobile Verson View`;
    mViewtxt[1].innerHTML = `모바일 버전 보기`;
    document.querySelector('#card03').setAttribute('onclick', 'mWindow(390)');
  }
};

function moveClock() {
  let clock = document.querySelectorAll('.clock');
  for (let i = 0; i < clock.length; i++) {
    if (clock[i].id == 'on') {
      clock[i].setAttribute('id', 'hide');
      if (i == clock.length - 1) {
        clock[0].setAttribute('id', 'on');
      } else {
        clock[i + 1].setAttribute('id', 'on');
      }
      return;
    }
  }
}

jscard.addEventListener('mouseover', (event) => {
  circle1.setAttribute('id', 'on');
  circle2.setAttribute('id', 'on');
  circle1.style = `transition: all 0.8s;`;
  circle2.style = `transition: all 0.8s;`;
});

jscard.addEventListener('mouseout', (event) => {
  circle1.removeAttribute('id');
  circle2.removeAttribute('id');
  circle1.style = `transition: all 0.8s;`;
  circle2.style = `transition: all 0.8s;`;
});

function mWindow(width) {
  window.open(`${location.pathname}`, '_blank', `width=${width}, height=844`);
}

function pcWindow() {}
