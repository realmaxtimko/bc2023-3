//імпортує модуль файлової системи Node.js
const fs = require("fs");

//Зчитуєм файл з розширенням json
fs.readFile("data.json", (err, data) => {
    if (err === null) {
        let jsonData = JSON.parse(data);
        const filteredData = jsonData.filter(entry => entry.parent === "BS3_BanksLiab");
        const outputText = filteredData.map(entry => `${entry.txten}:${entry.value}`).join('\n');

//Робим запис в текстовий файл
        fs.writeFile('output.txt', outputText, (err) => {
            if (err === null) {
                console.log("Результат збережно в файл!");
            } else {
                console.log(`Помилка при записі в файл: ${err}`);
            }
        });
    } else {
        console.log(`Помилка при записі в файл: ${err}`);
    }
});
