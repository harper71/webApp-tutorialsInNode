/*
GLOBAL  - NO WINDOW !!!!

__dirname  - path to current directory
__filename - file name
require    - function to use modules (CommonJS)
module     - info about current module (file)
process    - info about env where the program is being executed
*/

const ammount = 12

if (ammount < 10) {
  console.log('small number'); 
} else {
  console.log(`large number ${ammount}`);
}
console.log(__dirname);

console.log('Hey this is my first node app !!!');

setInterval(() => {
  console.log('hello world');
}, 1000)
