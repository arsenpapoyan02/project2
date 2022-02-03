const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const intro = document.querySelector('.intro');
const introH = intro.offsetHeight;
const body = document.body;
const burger = document.querySelector('.burger');
const arrow = document.querySelector('.up');
let scrollOffset = window.scrollY;


/* fixed header */

checkScroll(scrollOffset);

window.addEventListener('scroll', () => {
    scrollOffset = this.scrollY;

    checkScroll(scrollOffset);

    if(scrollOffset >= introH) {
        arrow.classList.add('active');
    }
    else {
        arrow.classList.remove('active');
    }
});

function checkScroll(scrollOffset) {
    if(scrollOffset >= introH) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}

/* smooth scroll */

let navLink = document.querySelectorAll('[data-scroll]');

navLink.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        let blockId = this.getAttribute('data-scroll');
        let blockOffset = document.querySelector(blockId).offsetTop;
        nav.classList.remove('active');
        body.classList.remove('no-scroll');

        window.scrollTo({
            top: blockOffset - header.offsetHeight,
            behavior: "smooth"
        });

    });
})


/* burger */

burger.addEventListener('click', () => {

    header.classList.add('active')
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll');

});

/* arrow */

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

