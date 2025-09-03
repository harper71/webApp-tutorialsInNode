import fs from "fs";
import {encryptWithPublicKey} from "./encrypt.js";
import { addToCurrentDir } from "./createKeyPair.js";
import {decryptWithPrivateKey} from "./decrypt.js";

const publicKey = fs.readFileSync(addToCurrentDir('id_rsa_pub.pem'), 'utf8');

const privateKey = fs.readFileSync(addToCurrentDir('id_rsa_priv.pem'))

const encryptedMessage = encryptWithPublicKey(publicKey, "super secret message");

console.log(encryptedMessage.toString());
console.log('==============\n');

console.log(decryptWithPrivateKey(privateKey, encryptedMessage).toString());
