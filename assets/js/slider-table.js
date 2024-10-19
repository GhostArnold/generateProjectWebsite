$(document).ready(function() {
    var currentSlide = 1;
    var totalSlides = 3;

    function showSlide(slideToShow, slideToHide) {
        $(slideToHide).removeClass('active').addClass('leave'); // Убираем активный класс и добавляем класс leave
        $(slideToShow).addClass('active enter'); // Добавляем активный и enter классы для нового слайда

        setTimeout(function() {
            $(slideToHide).removeClass('leave'); // Убираем класс leave после анимации
            $(slideToShow).removeClass('enter'); // Убираем класс enter
        }, 500); // Задержка перед уборкой классов
    }

    $('#prev').click(function() {
        var prevSlide = currentSlide;
        if (currentSlide > 1) {
            currentSlide--;
        } else {
            currentSlide = totalSlides;
        }
        showSlide('#slide' + currentSlide, '#slide' + prevSlide);
    });

    $('#next').click(function() {
        var nextSlide = currentSlide;
        if (currentSlide < totalSlides) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        showSlide('#slide' + currentSlide, '#slide' + nextSlide);
    });
});