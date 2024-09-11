const scrollElement = document.querySelector('.scroll_container');

let scrollPercent = null;
let documentHeight = null;
let windowHeight = null;

function scrollHandler() {

    documentHeight = document.body.clientHeight;
    windowHeight = innerHeight;

    scrollPercent = Math.ceil(scrollY / (documentHeight - windowHeight) * 100);

    scrollElement.style.width = scrollPercent + '%';

    console.log('style : ' + scrollElement.style.width);

    console.log('scroll : ' + scrollPercent + '%');
};

window.addEventListener('scroll', scrollHandler);