document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.appear-text');

  // Функция для анимации текста
  function typeText(textElement) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        if (text.slice(index, index + 4) === '<br>') {
          textElement.innerHTML += '<br>';
          index += 4;
        } else if (text.slice(index, index + 5) === '<br/>') {
          textElement.innerHTML += '<br/>';
          index += 5;
        } else {
          textElement.innerHTML += text[index];
          index++;
        }
        setTimeout(type, 11.5);
      } else {
        // Удаляем курсор после завершения печати
        textElement.querySelector('::after').style.display = 'none';
      }
    }

    type();
  }

  // Настройки для Intersection Observer
  const options = {
    threshold: 0.1, // Процент видимости элемента (0-1)
  };

  // Callback функция для Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeText(entry.target);
        observer.unobserve(entry.target); // Отключаем наблюдение после анимации
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  // Наблюдаем за каждым элементом .appear-text
  textElements.forEach((textElement) => {
    observer.observe(textElement);
  });
});
