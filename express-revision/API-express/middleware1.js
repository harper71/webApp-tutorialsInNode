import express from 'express'
import logger from './middewares/logger.js';
import authorize from './middewares/authorize.js';
const port = 5000;
const app = express();

//app.use('/api', [logger, authorize]);
//1 use ns route
//2. option - our oun /express/ third party


app.use([logger, authorize]);

app.get('/',  (req, res) => {
  res.send('Home');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
  console.log(req.user);
  
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(port, () => {
  console.log(`server runnig at ${port}`)
});

