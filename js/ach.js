function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementById("myBtn").style.display = "block" : document.getElementById("myBtn").style.display = "none" }

function topFunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 }
$(window).on("scroll", function() { $(window).scrollTop() ? $("nav").addClass("black") : $("nav").removeClass("black") }), $(document).ready(function() { $(".menu h4").click(function() { $("nav ul").toggleClass("active") }) }), window.onscroll = function() { scrollFunction() };