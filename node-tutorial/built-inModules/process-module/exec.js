const { exec } = require('child_process');
const util = require('util');

// Promisify the exec function
const execPromise = util.promisify(exec);
let files = [];
// Run a shell command

(async () => {
  try {
    const { stdout, stderr } = await execPromise('ls');
    if (stderr) {
      console.error(stderr);
      return;
    }
    files = stdout.split('\n').filter((file) => file); // Process the output
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();

console.log(files);
