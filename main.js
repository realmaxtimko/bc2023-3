const fs = require('fs');

// Читаня даних з файлу data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(`Помилка при читанні файлу: ${err}`);
    return;
  }

  const jsonData = JSON.parse(data);

  // Обробка та фільтрація даних
  const filteredData = processData(jsonData);

  // Збереження результатів у файл output.txt
  fs.writeFile('output.txt', filteredData, (err) => {
    if (err) {
      console.error(`Помилка при запису в файл: ${err}`);
    } else {
      console.log('Результати були збережені у файл output.txt.');
    }
  });
});

// Функція для обробки та фільтрації даних
function processData(data) {
  // Фільтрація даних для значень ключа "parent" рівних "BS3_BanksLiab"
  const filteredData = data.filter(item => item.parent === 'BS3_BanksLiab');

  // Створення рядків у вигляді <назва показника англійською>:<розмір>
  const resultStrings = filteredData.map(item => `${item.txten}:${item.value}`);

  // Повернення результату як рядок з роздільниками нового рядка
  return resultStrings.join('\n');
}
