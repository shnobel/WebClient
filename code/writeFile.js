// Write a function that takes a filename and an array. 
//The function should join the values in the array with
// commas and append it to the end of the file.

const path = require('path');
const fs = require('fs');

function writeFile(fileName, array = []) {
    if(!fileName) console.error(`Incorrect file name: ${fileName}`);
    if(array.length === 0) console.error(`No data to write: ${array}`);
    fs.appendFile(path.join(__dirname, '/' , fileName), `${array.join(',')}\n`, err => {
        if(err) {
            console.error(err);
        }
    });
}

writeFile('test.txt', [1,2,3,4,5,6]);
