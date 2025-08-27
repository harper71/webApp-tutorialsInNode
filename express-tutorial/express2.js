const express = require('express');
const path = require('path');
app = express();

// setup static and middleware
app.use(express.static('./express-tutorial/public'))
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./express-tutorial/navbar-app/index.html'));
  console.log('user hit the resource');
})

app.listen(5000, () => {
  console.log('listening to port 5000 ....');
})
