import express from 'express';
import { people } from './data.js';
const app = express()
import path from 'path'
import { fileURLToPath } from 'url';
import logger from './middewares/logger.js';
import { log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.static(path.resolve(__dirname, 'methods-public')));
app.use(logger);

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
// endpoints 
app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people})
});


//using javascript to send put requests
app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params
  console.log(`id to delete ${id}`);

  const Person = people.find((person) => person.id === Number(id));

  if (!Person) {
    return res.status(404).json({success: false, msg:`no person with id  ${id}`});
  }
  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({success: true, data: newPeople});
})


app.listen(5000, () => {
  console.log('listening at port 5000');
});