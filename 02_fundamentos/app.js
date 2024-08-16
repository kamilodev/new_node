const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');
console.log(`Word count: ${words.length}`);

reactWordCount = content.match(/react/gi ?? []).length;

console.log(`El numero de veces que se repite la palabra React es: ${reactWordCount}`);
