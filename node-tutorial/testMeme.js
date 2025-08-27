import memesArray from "./memesArray.js";

const randIndex = Math.floor(Math.random() * 46) + 1;

console.log(randIndex);


console.log(`${memesArray[randIndex].url}`);  
let undefinedIndexes = [];
let count = 0;
memesArray.forEach((element, index) => {
  if(element.url !== undefined) {
    count++;
    undefinedIndexes.push(index)
  }
});


console.log('====================================');
console.log(undefinedIndexes);
console.log('====================================');
console.log(count);
console.log('====================================');
console.log('====================================');