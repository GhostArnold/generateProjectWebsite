$(document).ready(function() {
    var currentSlide = 1;
    var totalSlides = 3;

    function showSlide(slideToShow, slideToHide, direction) {
        $(slideToHide).removeClass('active').addClass('leave'); // Убираем активный класс и добавляем класс leave
        $(slideToShow).addClass('active'); // Добавляем активный класс для нового слайда

        // Устанавливаем направление анимации
        if (direction === 'next') {
            $(slideToShow).addClass('enter'); // Добавляем класс enter для анимации входа
        } else {
            $(slideToShow).addClass('enter-reverse'); // Класс для анимации входа с обратным направлением
        }

        setTimeout(function() {
            $(slideToHide).removeClass('leave'); // Убираем класс leave после анимации
            $(slideToShow).removeClass('enter enter-reverse'); // Убираем классы enter
            updateIndicators(currentSlide); // Обновляем индикаторы после анимации
        }, 500); // Задержка перед уборкой классов
    }

    function updateIndicators(activeIndex) {
        $('.indicator').removeClass('active'); // Убираем класс active у всех индикаторов
        $('.indicator').eq(activeIndex - 1).addClass('active'); // Добавляем класс active к текущему индикатору
    }

    $('#prev').click(function() {
        var prevSlide = currentSlide;
        if (currentSlide > 1) {
            currentSlide--;
        } else {
            currentSlide = totalSlides;
        }
        showSlide('#slide' + currentSlide, '#slide' + prevSlide, 'prev'); // Передаем направление
    });

    $('#next').click(function() {
        var nextSlide = currentSlide;
        if (currentSlide < totalSlides) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        showSlide('#slide' + currentSlide, '#slide' + nextSlide, 'next'); // Передаем направление
    });

    // Инициализация индикаторов
    updateIndicators(currentSlide);
});