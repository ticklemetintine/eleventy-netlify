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

    if($('.widgets').length > 0) {
        var coord = JSON.parse($(".coords").val());
        console.log(coord.coordinates)

        $('.map').append('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.3973663398651!2d'+coord.coordinates[0]+'0578372!3d'+coord.coordinates[1]+'029640266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1630384186093!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
    }
});