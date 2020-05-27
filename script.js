'use strict';
/* eslint-env browser*/

function scrollAppear1() {
    var two_quotes = document.querySelectorAll(document.getElementById("curveText"));
    var introPosition = two_quotes.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    
    if (introPosition < screenPosition) {
        two_quotes.classList.add('quotes_appear');
    }
}

window.addEventListener('scroll', scrollAppear1);

function scrollAppear2() {
    var two_lists = document.querySelector('.two_lists');
    var introPosition = two_lists.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    
    if (introPosition < screenPosition) {
        two_lists.classList.add('lists_appear');
    }
}


window.addEventListener('scroll', scrollAppear2);
