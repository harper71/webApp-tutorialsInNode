// npm -global command, comes with node
// npm --version

// local dependency = use it only in this particular project
// npm install i <packageName>
// sudo npm install -g <packageName> (Mac)

// package.json - manifest file (stores important info about project/package)'
// npm init ()
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, 4]]]
const newItems = _.flattenDeep(items)

console.log(newItems);
