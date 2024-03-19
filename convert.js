// convert.js
const fs = require('fs');
const path = require('path');

// txt 파일의 경로 설정
const txtFilePath = path.join(__dirname, 'quotes.txt');
// json 파일의 저장될 경로 설정
const jsonFilePath = path.join(__dirname, 'quotes.json');

// txt 파일 읽기
fs.readFile(txtFilePath, 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    // 각 줄을 명언과 저자로 분리하고 객체 배열 생성
    const quotes = data.split('\n').map(line => {
        const parts = line.split(',').map(part => part.trim());
        return { quote: parts[0], author: parts[1] };
    });

    // 객체 배열을 JSON 형식으로 변환하여 파일에 쓰기
    fs.writeFile(jsonFilePath, JSON.stringify(quotes, null, 2), 'utf8', err => {
        if (err) {
            return console.error(err);
        }
        console.log('quotes.json 파일이 성공적으로 생성되었습니다.');
    });
});
