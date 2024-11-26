// CommonJS every file is module (by default)
//Modules - Encapsulate code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternates');
require('./7-mind-grenades');

console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

data.items.forEach(element => {
sayHi(element)  
});
