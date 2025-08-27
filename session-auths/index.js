import express, { json } from "express"
import { standardExpress } from "./middleware/new-data.js";
import dotenv from "dotenv"
import logger from "morgan";

const app = express();
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/session_tutorial_db";
const PORT = process.env.PORT || 8000


import session from "express-session";
import MongoStore from "connect-mongo";
import conectDb from "./db/connectDb.js";
import mongoose from "mongoose";

conectDb(DATABASE_URL);

const newStore = MongoStore.create({
  mongoUrl: DATABASE_URL,
  collectionName: "sessions",
});

// session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || "superSecretKey",
  resave: false,
  saveUninitialized: false,
  store: newStore,  
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
  }
}))


// middleware
app.use(standardExpress, logger("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.get('/', (req, res) => {
  console.log(req.session);
  
    if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  res.status(200).json({
    status: "Success",
    message: `You have visited ${req.session.views} times`,
    Data: { name: "Prince Azuka" },
  });
});


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);  
})