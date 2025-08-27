import express from 'express';
import router from './routes/people.js';
import path from 'path'

import { fileURLToPath } from 'url';
import logger from './middewares/logger.js';

const app = express()

function partResolver(pathName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  path.resolve(__dirname, pathName)
}

// middleware
app.use(express.static(partResolver('methods-public')));
app.use(logger);
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', router)






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