import crypto from "crypto";
import fs from "fs";
import { decryptWithPublicKey }  from './decrypt.js'
import { packageOfDataToSend } from "./signedMessage.js";
import { addToCurrentDir } from "./createKeyPair.js";

const hash = crypto.createHash(packageOfDataToSend.algorithm);

const publicKey = fs.readFileSync(addToCurrentDir('id_rsa_pub.pem'), 'utf8');

const decryptedMessage = decryptWithPublicKey(publicKey, packageOfDataToSend.signedAndEncryptedData);

const decryptedMessageToHex = decryptedMessage.toString()
const hashOfOriginal = hash.update(JSON.stringify(packageOfDataToSend.originalData));

const hashOfOriginalHex = hash.digest('hex');

if (hashOfOriginalHex === decryptedMessageToHex) {
  console.log('success: the data has not been tampered with and sender is valid');
} else {
  console.log('ohhh .... someone is trying to manipulate the data or someone else is sending this sata');
  
}