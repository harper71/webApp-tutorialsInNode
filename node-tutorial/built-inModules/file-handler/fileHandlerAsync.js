const fs = require('fs')

console.log('start');

const jsondata = fs.readFileSync('./modules/newData.json', 'utf-8')

console.log(jsondata);

fs.readFile('./modules/text.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;

  fs.readFile('./modules/text2.txt', 'utf8', (err, result) => {
    if (err) {
    console.log(err);
    return
  }

  const second = result;

    fs.writeFile('./modules/result-async',
    `this is am example of an async ${first},\n ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
        
      }
      console.log(result);
    })
  })
})
