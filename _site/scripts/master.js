var el = document.querySelector('.menu-toggle'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close');

el.onclick = function() {
    menu.classList.toggle('active');
}

close.onclick = function() {
    menu.classList.toggle('active');
}

$(document).ready(function() {
    if($('.home .testimonials').length > 0) {
        $('.home .testimonials').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            adaptiveHeight: true,
            slide: '.testimonial-item'
        });
    }
});