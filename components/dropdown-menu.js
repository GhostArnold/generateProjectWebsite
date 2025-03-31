document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
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
});
