import base64url from "base64url";
import crypto from "crypto";
import fs from 'fs';
import { addToCurrentDir } from "./createKeyPair.js";

const singnatureFunction = crypto.createSign('RSA-SHA256');

const header = {
  alg: 'RS256',
  typ: "JWT"
};

const payLoadObj = {
  sub: "1234567890",
  name: "John Doe",
  admin: "true",
  iat: 1516239022
};

const headerObjString = JSON.stringify(header);
const payLoadObjString = JSON.stringify(payLoadObj)

const base64UrlHeader = base64url(headerObjString);
const base64UrlPayload = base64url(payLoadObjString);


singnatureFunction.update(base64UrlHeader + '.' + base64UrlPayload);
singnatureFunction.end();


const PRIV_KEY = fs.readFileSync(addToCurrentDir('priv_key.pem'), 'utf8');

const signatureBase64 = singnatureFunction.sign(PRIV_KEY, 'base64');


const signatureBase64Url = base64url.fromBase64(signatureBase64)

const jwt = `${base64UrlHeader}.${base64UrlPayload}.${signatureBase64Url}`;

console.log("JWT:", jwt);



// const JWT =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";


// const jwtParts = JWT.split('.')
// console.log(jwtParts);

// const header = jwtParts[0];
// const payload = jwtParts[1];
// const signature = jwtParts[2];

// const decodeedHeader = base64url.decode(header);
// const decodeedPayload = base64url.decode(payload);
// const decodeedSignature = base64url.decode(signature);


// console.log(decodeedHeader);
// console.log(decodeedPayload);
// console.log(decodeedSignature);