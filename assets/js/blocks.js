document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Закрыть все другие dropdown
            dropdownBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.nextElementSibling.classList.remove('active');
                }
            });
            
            // Переключить текущий dropdown
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Закрыть dropdown при клике вне его
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownBtns.forEach(btn => {
                const content = btn.nextElementSibling;
                if (content.classList.contains('active') && 
                    !content.contains(event.target)) {
                    content.classList.remove('active');
                }
            });
        }
    });

    // Открытие модального окна при клике на изображение
    document.querySelectorAll('.item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active'); // Добавляем класс для отображения
            modalImage.src = this.src; // Устанавливаем источник изображения в модальном окне
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active'); // Убираем класс для скрытия
        document.body.style.overflow = ''; // Включаем прокрутку страницы
    });

    // Закрытие модального окна при клике вне изображения
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active'); // Убираем класс для скрытия
            document.body.style.overflow = ''; // Включаем прокрутку страницы
        }
    });
});