const { log, error } = require('console');
const EventEmitter = require('events')

const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
  log(`data received ${name} id:${id}`);
})

customEmitter.on('response', () => {
  const array = [1,2,3,4,5]
  array.forEach((value) => log(value * 3));
})

customEmitter.on('newdata', (arrayNums ,num) => {
  arrayNums.forEach((value) => log(value * num));
})



customEmitter.emit('response', 'prince', 23);

customEmitter.emit('newdata', [2,3,4,6], 2);