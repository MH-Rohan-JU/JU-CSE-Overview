'use strict';

const images1 = document.querySelectorAll('.cse');
const images2 = document.querySelectorAll('.cse-3');
const btn1 = document.querySelector('.btnimg');
const btn2 = document.querySelector('.btnimg-2');
const btn3 = document.querySelector('.btnimg-3');
const btn4 = document.querySelector('.btnimg-4');
const darkMode = document.querySelector('.dark-mode');
const text = document.querySelectorAll('.text');

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

darkMode.addEventListener('click', () => {
    document.querySelector('.body').classList.toggle('bg-dark');
    text.forEach((t) => {
        t.classList.toggle('white');
    });
    document.querySelector('.texten').classList.toggle('white');
    document.querySelector('.jucse').classList.toggle('white');
    document.querySelector('.intro').classList.toggle('aqua');
});
