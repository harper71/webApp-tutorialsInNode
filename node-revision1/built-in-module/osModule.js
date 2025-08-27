const os = require('os');


// cpu info
const cpuModule = os.cpus().map((items) => {
  return items.model
});
let cpuName;
for (let index = 0; index < cpuModule.length; index++) {
  if (cpuModule[index] === cpuModule[index + 1]) {
    cpuName = cpuModule[index];
    break;
  }
}
console.log(cpuName);

console.log(os.userInfo());
// system uptime
console.log(os.uptime());


const currentOS = {
  name: os.type(),
  totalMemory: `${(os.totalmem() / 1073741824).toFixed(2)}GB`,
  freeMemory: `${(os.freemem() / 1073741824).toFixed(2)}GB`,
}

console.log(currentOS);
