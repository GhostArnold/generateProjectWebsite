document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Закрыть все другие ответы
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            // Переключить активное состояние текущего элемента
            item.classList.toggle('active');
        });
    });
});