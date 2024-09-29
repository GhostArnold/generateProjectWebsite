document.addEventListener('DOMContentLoaded', () => {
  // Ищем классы .appear-text
  const textElements = document.querySelectorAll('.appear-text');

  //   Перебираем эти классы
  textElements.forEach((textElement) => {
    // Создаём переменную, в которой хранится текст
    const text = textElement.innerHTML;
    // Очищаем текст
    textElement.innerHTML = '';
    // Индекс для перебора
    let index = 0;

    function type() {
      // Если индекс меньше длины текста, вызываем следующее условие
      if (index < text.length) {
        // Проверяем, является ли текущая позиция началом <br>
        if (text.slice(index, index + 4) === '<br>') {
          textElement.innerHTML += '<br>'; // Добавляем разрыв строки
          index += 4; // Пропускаем <br> (4 символа)
        } else if (text.slice(index, index + 5) === '<br/>') {
          textElement.innerHTML += '<br/>'; // Добавляем разрыв строки
          index += 5; // Пропускаем <br/> (5 символов)
        } else {
          // Прибавляем символ (по букве) с интервалом 15 мс
          textElement.innerHTML += text[index];
          index++;
        }
        setTimeout(type, 10); // Задержка в 15 мс между символами
      }
    }

    type();
  });
});
