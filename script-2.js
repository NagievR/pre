'use strict'

const counter = document.querySelector('.counter');
const logo = document.querySelector('.logo');
const wrap = document.querySelector('.wrap');
const pg2 = document.querySelector('.pg2');

// const showNextPage = () => {
//   wrap.classList.add('hide');
//   pg2.classList.add('show');
// };

// let count = 0;
// const timerId = setInterval(() => {
//   if (count >= 100) {
//     clearInterval(timerId);
//     logo.style.animationIterationCount = 3;
//     setTimeout(showNextPage, 300);
//   }

//   counter.innerHTML = count;
//   count++;
// }, 60);

setTimeout(()=> {
  wrap.classList.add('hide');
  pg2.classList.add('show');
}, 3000);
