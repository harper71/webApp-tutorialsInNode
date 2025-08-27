import express from 'express'
const port = 5000;
const app = express();

app.use(express.static('public'));

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
