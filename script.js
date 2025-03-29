'use strict';

const animatedTitle = 'JU CSE Overview';
const images1 = document.querySelectorAll('.cse');
const images2 = document.querySelectorAll('.cse-3');
const btn1 = document.querySelector('.btnimg');
const btn2 = document.querySelector('.btnimg-2');
const btn3 = document.querySelector('.btnimg-3');
const btn4 = document.querySelector('.btnimg-4');
const darkMode = document.querySelector('.dark-mode');
const text = document.querySelectorAll('.text');
const readMore = document.querySelector('.read-more');
const infrastructure =
    '<br><br>আমাদের যে ৩ টি ল্যাব আছে, প্রতিটি ল্যাবেই ভালো কনফিগারেশনের কম্পিউটার আছে। প্রতিটি স্টুডেন্টের ক্লাস করার জন্যে পর্যাপ্ত কম্পিউটার আছে। আর যারা পার্সোনাল কম্পিউটার এনে ক্লাস করে তাদের জন্য আলাদা বসার টেবিল আছে।';

let i = 0;
function typewriter() {
    if (i < animatedTitle.length) {
        document.querySelector('.jucse').innerHTML += animatedTitle.charAt(i);
        i++;
        setTimeout(typewriter, 80);
    }
}
typewriter();
let t = 0;
const counting = function () {
    let min = String(Math.trunc(t / 60)).padStart(2, 0);
    let sec = String(t % 60).padStart(2, 0);
    document.querySelector('.timer').textContent = `${min}:${sec}`;
    t++;
};
const timer = setInterval(counting, 1000);
btn1.addEventListener('click', () => {
    images1.forEach((imgs) => {
        imgs.classList.remove('hidden');
    });
    btn1.classList.add('hidden');
});

btn2.addEventListener('click', () => {
    btn2.classList.add('hidden');
    document.querySelector('.cse-2').classList.remove('hidden');
});

btn3.addEventListener('click', () => {
    images2.forEach((imgs) => {
        imgs.classList.remove('hidden');
    });
    btn3.classList.add('hidden');
});

btn4.addEventListener('click', () => {
    document.querySelector('.cse-4').classList.remove('hidden');
    btn4.classList.add('hidden');
});

readMore.addEventListener('click', () => {
    readMore.insertAdjacentHTML('afterend', infrastructure);
    readMore.classList.add('hidden');
});

darkMode.addEventListener('click', () => {
    document.querySelector('.body').classList.toggle('bg-dark');
    text.forEach((t) => {
        t.classList.toggle('white');
    });
    document.querySelector('.texten').classList.toggle('white');
    document.querySelector('.jucse').classList.toggle('white');
    document.querySelector('.intro').classList.toggle('aqua');
    document.querySelector('.card-text').classList.toggle('white');
    document.querySelector('.timer').classList.toggle('white');
});
