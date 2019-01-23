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