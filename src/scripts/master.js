var el = document.querySelector('.menu-toggle'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close');

el.onclick = function() {
    menu.classList.toggle('active');
}

close.onclick = function() {
    menu.classList.toggle('active');
}