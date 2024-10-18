document.addEventListener('DOMContentLoaded', () => {
  const textBlocks = document.querySelectorAll('.block-two-text p');

  // Добавить классы анимации к текстам
  textBlocks.forEach((block, index) => {
    // Чередуем анимации
    if (index % 2 === 0) {
      block.classList.add('fade-in-left');
    } else {
      block.classList.add('fade-in-right');
    }
  });

  // Настройки для Intersection Observer
  const options = {
    threshold: 0.1, // Процент видимости элемента (0-1)
  };

  // Callback функция для Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  // Наблюдать за каждым абзацем в .block-two-text
  textBlocks.forEach((block) => {
    observer.observe(block);
  });
});
