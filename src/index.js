module.exports = (first, second) => {
  // Предполагается что строки first, second содержат только цифры
  
  // Подготовка операндов для последовательного поэлементного перемножения начиная с младших разрядов  
  const [a,b] = [first.split('').reverse(), second.split('').reverse()];

  // Массив для хранения и обработки результата перемножения
  const result = [];
  
  // Поэлементное перемножение
  a.forEach((valueA,indexA) => {
    b.forEach((valueB,indexB) => {
      const value = valueA * valueB;
      result[indexA + indexB] = (result[indexA + indexB]) ? result[indexA + indexB] + value : value; // Если элемент существует - прибавляем, если нет - перезаписываем
    }) 
  });

  // Поразрядное формирование результата
  for (let i = 0; i < result.length; i++) {  
    move = Math.floor(result[i] / 10);  // Выделяем старший разряд из текущего элемента
    result[i] = result[i] % 10;         // Оставляем меньший разряд в текущем элементе
    (result[i + 1]) ? (result[i + 1] += move) : ( (move != 0) ? (result[i + 1] = move) : (false)); // Переносим старший разряд
  }

  return result.reverse().join('');
}
