//events driven programming this is done
const EventEmitter = require('events');

const costumEmitter = new EventEmitter()

costumEmitter.on('response',  (name, id) => {
  console.log(`data recieved name: ${name} and id: ${id}`);
})

costumEmitter.on('response',  () => {
  console.log(`data more logics`);
})

costumEmitter.emit('response', 'prince', 12);
