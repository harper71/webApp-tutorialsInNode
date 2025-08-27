const fs = require('fs').promises;

const start = async () => {
  try {
    const first = await fs.readFile(`${__dirname}/text.txt`, 'utf8')
    const second = await fs.readFile(`${__dirname}/text2.txt`, 'utf8')
    await fs.writeFile(
      `${__dirname}/dataJoin.txt`,
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'w' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
console.log("prince azuka");

/*
const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    })   
  })
}

getText('./modules/text.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log('elements');
*/