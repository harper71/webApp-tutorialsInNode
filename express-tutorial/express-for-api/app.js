const express = require('express');
const { products, people } = require('../data')
const app = express()

app.get('/', (req, res) => {
  /* res.status(200).json([
    {name: 'John'},
    {age: 23},
  ])*/
  res.status(200).send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/people', (req, res) => {
  const newPeople = people.map((people) => {
    const { id, name } = people;
    return {id, name};
  });
  res.status(200).json(newPeople);
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image} = product
    return {id, name, image}
  });
  res.json(newProducts);
});

app.get('/api/products/:prodId', (req, res) => {
  console.log(req.params);
  const { prodId } = req.params;
  const singleProducts = products.find((product) => product.id === Number(prodId));
  if(!singleProducts) {
    return res.status(404).send('<h1>this product does not exist</h1>')
  }
  res.json(singleProducts);
});

app.get('/api/products/:prodId/review/:reviewId', (req, res) => {
  console.log(req.params);
  res.send('checking .....');
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProduct = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProduct = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(404).json({ success: true, Data: [] })
  }

  res.status(200).json(sortedProducts)
});

// listenig for the server
app.listen(5000, () => {
   console.log('new data');  
});
