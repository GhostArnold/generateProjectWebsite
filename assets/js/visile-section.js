// Создаем новый объект IntersectionObserver, который принимает колбэк-функцию.
// Колбэк-функция будет вызываться всякий раз, когда наблюдаемы элементы пересекают границы видимости.
const observer = new IntersectionObserver((entries) => {
  // Для каждого элемента, за которым мы наблюдаем, проверяем его статус пересечения.
  entries.forEach((entry) => {
    // Если элемент в зоне видимости (пересекает границы),
    // то добавляем к нему класс 'show'.
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    // Если элемент выходит из зоны видимости,
    // то удаляем класс 'show'.
    else {
      entry.target.classList.remove('show');
    }
  });
});

// Находим все элементы с классом 'hidden' на странице.
const hiddenElements = document.querySelectorAll('.hidden');

// Для каждого скрытого элемента устанавливаем наблюдатель.
hiddenElements.forEach((el) => observer.observe(el));
