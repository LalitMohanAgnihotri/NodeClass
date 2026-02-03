import fs from 'fs';

// this is for synchronous file operations

// console.log(fs.readFileSync('file.txt', 'utf-8'));
// fs.writeFileSync('file.txt', 'This is new content.');
// fs.appendFileSync('file.txt', '\nNew line added.');
// console.log(fs.readFileSync('file.txt', 'utf-8'));

// this is for asynchronous file operations

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.writeFile('file.txt', 'This is new content.', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

fs.appendFile('file.txt', '\nNew line added.', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});