import passport from "passport";
import connectDb from "./db/connectDb.js";
import express from "express";
import router from "./routes/index.js";
const app = express();
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/session_tutorial_db";
const PORT = process.env.PORT || 8000;

// sessions login
 
import session from "express-session";
import MongoStore from "connect-mongo";

connectDb(DATABASE_URL);

const newStore = MongoStore.create({
  mongoUrl: DATABASE_URL,
  collectionName: "sessions"
});

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "superSecretKey",
    resave: false,
    saveUninitialized: false,
    store: newStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false
    }
  })
);


// !------- password authentications ------- !

// needds
import "./config/passport.js";


app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
})
