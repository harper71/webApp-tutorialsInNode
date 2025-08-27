const dataMore = () => {
  return new Promise((resolve, reject) => {
    const oneToTen = [];
    for (let i = 1; i < 10; i++) {
      oneToTen.push(i);
    }
    resolve(oneToTen);
    reject('this code did not work');
  })
}


async function aware() {
  
  const inMore = await []

  for (let i = 0; i < 35; i++) {
    inMore.push(i)
    
  }

  console.log(`this is the async function ${inMore}`);
  
  
}





dataMore()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })

aware();
console.log('befor promise starts');
