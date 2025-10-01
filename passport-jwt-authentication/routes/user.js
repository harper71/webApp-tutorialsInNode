import express from "express";
import Users from '../models/user.js';
const router = express.Router();
import passport from 'passport';
import { genPassword, issueJWT } from '../lib/utils.js';

// TODO
router.get('/protected', (req, res, next) => {
});

// TODO
router.post('/login', function(req, res, next){});

// TODO
router.post('/register', async (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = await new Users({
    username: req.body.username,
    hash: hash,
    salt: salt,
  })

  const user = await newUser.save();

  const jwt = issueJWT(user)
  console.log(user);
  res.json({
    success: true,
    user: user,
    token: jwt.token,
    expireIn: jwt.expires
  });
});

/**
 * -------------- GET ROUTES ----------------
 */

router.get('/', (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});

// When you visit http://localhost:3000/login, you will see "Login Page"
router.get('/login', (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

// When you visit http://localhost:3000/register, you will see "Register Page"
router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});


export default router;
