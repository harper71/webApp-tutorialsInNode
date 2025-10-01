import passport from "passport";
import { validPassword } from "../lib/passportUtils.js";
import passportLocal from "passport-local";
import Users from "../model/user.js";

const LocallStrategy = passportLocal.Strategy;

const verifyCallback = async (username, password, cb) => {
  try {
    const user = await Users.findOne({ username: username });

    if (!user) {
      return cb(null, false, { message: "User not found" });
    }
    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {
      return cb(null, user);
    } else {
      return cb(null, false, { message: "Invalid password" });
    }
  } catch (error) {
    console.error(error, );
    return cb(error)
  }
}

const Strategy = new LocallStrategy(verifyCallback)

passport.use(Strategy);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
})
const deserializer = async (userId, cb) => {
  try {
    const user = await Users.findById(userId).exec();

    cb(null, user);
  } catch (error) {
    console.error(error);
    cb(error);
  }
}
passport.deserializeUser(deserializer)
