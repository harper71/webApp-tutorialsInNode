import jwt from 'jsonwebtoken';
import fs from 'fs';
import { addToCurrentDir } from './createKeyPair.js';


const pub_key = fs.readFileSync(addToCurrentDir('pub_key.pem'), 'utf8')

const priv_key = fs.readFileSync(addToCurrentDir("priv_key.pem"), 'utf8');

const payLoadObj = {
  sub: "1234567890",
  name: "John Doe",
  admin: "true",
  iat: 1516239022
};


const signedJWT = jwt.sign(payLoadObj, priv_key, {algorithm: 'RS256'});


jwt.verify(signedJWT, pub_key, {algorithms: ['RS256']}, (err, payLoadObj) => {
  console.log(payLoadObj);
})
