"use strict"

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})
$(document).ready(function() {
        $(".menu h4").click(function() {
            $("nav ul").toggleClass("active")

        })
    }

)



class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {

        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];


        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {

            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {

            typeSpeed = this.wait;

            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            this.wordIndex++;

            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}



document.addEventListener('DOMContentLoaded', init);


function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active')
        $('ul.sh').toggleClass('active')
    })
})


$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});


//slider
let SLIDEINDEX = 0;

showSlides(SLIDEINDEX)


function showSlides(index) {

    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot-navigation');


    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }



    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");


}



document.querySelector("#arrow-prev").addEventListener('click', function() {
    showSlides(--SLIDEINDEX);
})


document.querySelector("#arrow-next").addEventListener('click', function() {
    showSlides(++SLIDEINDEX);
})



document.querySelectorAll('.dot-navigation').forEach(function(elem) {
    elem.addEventListener('click', function() {

        let nodes = Array.prototype.slice.call(this.parentElement.children),
            dotIndex = nodes.indexOf(elem);


        showSlides(SLIDEINDEX = dotIndex)
    })
})



setInterval(function() { showSlides(++SLIDEINDEX) }, 7000);