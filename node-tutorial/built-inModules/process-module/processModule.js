let envName = process.env.NAME;
console.log(envName);

console.log(process.arch);
console.log(process.platform);

process.stdout.write('Hello what is your name:\n');

process.stdin.on('data', (data)=> {
  process.stdout.write(`hello, ${data}`);
  process.exit(0);
})
