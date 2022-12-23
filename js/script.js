$(document).ready(function () {
    $('.autoplay1').slick({
        fade: true,
        dots: false,
        arrows: false,
        slickPrev: false,
        slickNext: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 3000,
        draggable: false,
    });

    $('.autoplay2').slick({
        vertical: true,
        dots: false,
        arrows: false,
        slickPrev: false,
        slickNext: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        draggable: false,
    });

    $('.play3').slick({
        dots: false,
        slidesToShow: 2,
        speed: 1000,
        centerMode: false, 
        variableWidth: true,  

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                  arrows: false,
                  centerMode: true,
                  slidesToShow: 1
                }
            }
        ]
    });
});

function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
    observer.observe(elm);
}

/*$(window).scroll(function(event) {
    if($(this).scrollTop() > 0) {
        $(".bottom").fadeIn();
        return false;
    }
    else {
        $(".bottom").fadeOut();
    }
});

var lastScrollTop = 0;

$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > ScrollTop){
        $(".bottom").fadeOut();
    }
    else {
        $(".bottom").fadeIn();
    }
    lastScrollTop = st;
});

$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st == 0) {
        $(".bottom").fadeOut();
    }
});*/

/*let body = document.querySelector('body');

body.addEventListener('scroll', () => { 
    let scrollTop = body.scrollHeight;
    console.log(scrollTop);

let headerWrapper = document.querySelector('.bottom');
console.log(headerWrapper);

if(scrollTop >= 100){
    headerWrapper.classList.add('hide');
}else{    
    headerWrapper.classList.remove('hide');
}
});*/

let lastScroll = 0;
const defaultOffset = 200;
const nav = document.querySelector('.nav');
const bottom = document.querySelector('.bottom');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => nav.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        nav.classList.add('hide');
        bottom.classList.remove('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        nav.classList.remove('hide');
        bottom.classList.add('hide');
    }

    lastScroll = scrollPosition();
})