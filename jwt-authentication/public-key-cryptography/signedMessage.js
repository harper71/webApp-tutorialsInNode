import crypto from "crypto";
import fs  from "fs";
import {encryptWithPublicKey,  encryptWithPrivateKey } from "./encrypt.js"; 
import { addToCurrentDir } from "./createKeyPair.js";

const hash = crypto.createHash('sha256');

const myData = {
  frstname: 'Prince',
  lastname: 'azuka',
  socialSecurityNumber: "NO NO NO. Never put personal info in a digitally \ signed message since this form of cryptography does not hide the data!"
};

const myDataString = JSON.stringify(myData);

hash.update(myDataString);

const hashedData = hash.digest('hex');


const senderPrivateKey = fs.readFileSync(addToCurrentDir('id_rsa_priv.pem'), 'utf8');

const signedMessage = encryptWithPrivateKey(senderPrivateKey, hashedData);


const packageOfDataToSend = {
  algorithm: 'sha256',
  originalData: myData,
  signedAndEncryptedData: signedMessage
};

export {packageOfDataToSend};
