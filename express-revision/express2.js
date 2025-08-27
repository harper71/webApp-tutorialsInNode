import express from "express";
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// setup static and middleware
app.use(express.static(path.resolve(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'))
// });



app.all('', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(3000, () => {
  console.log('server is listening on port 5000 ......');
});
