process.stdout.write('first\n');

setTimeout(() => {
  process.stdout.write('second\n');
  
}, 5)

process.stdout.write('third\n');


