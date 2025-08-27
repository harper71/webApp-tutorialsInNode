const { readFile } = require('fs').promises;



function getText(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

getText('./value.txt')

async function AddToFiles(file1, file2) {
  try {
    const first = await readFile(file1, 'utf8');
    const second = await readFile(file2, 'utf8');

    console.log(`${first} ${second}`);
  } catch (error) {
   console.log(error);
   
  }
  
}


AddToFiles(`${__dirname}/value.txt`, `${__dirname}/values2.txt`);
