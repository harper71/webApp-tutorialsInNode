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


//using javascript to send post requests
app.post('/api/people', (req, res) => {
  const {name} = req.body
  log(name);
  if (!name) {
    return res.status(400).json({success: false, msg:'please provide name value'});
  }
  res.status(201).json({success: true, person: name});
})


app.post('/api/postman/people', (req, res) => {
  const {name} = req.body;
  log(name);
  if (!name) {
    return res.status(400).json({success: false, msg:'please provide name value'});
  }
  res.status(201).json({success: true, person: [...people, name]});
})

// using forms to send post requests
app.post('/login', (req, res) => {
  const userName = req.body;
  console.log(req.body);
  if(!userName.name) {
    return res.status(401).send('provide your use name');
  } else {
    return  res.send(`Welcome: ${userName.name}`);
  }
})

app.listen(5000, () => {
  console.log('listening at port 5000');
});