import { readFileSync } from 'fs';
import { addToCurrentDir } from '../createKeyPair.js';
import passportJwt from "passport-jwt"
import Users from '../models/user.js';

const JwtStrategy = passportJwt.Strategy;
const ExtractKwt = passportJwt.ExtractJwt;



const pathToKey = addToCurrentDir('id_rsa_pub.pem');

const PUB_KEY = readFileSync(pathToKey, 'utf8');

// TODO
const options = {
  JwtFromRequest: ExtractKwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithm: ['RS256']
};
const  strategy = JwtStrategy(options, async (payload, done) => {
  try {
    const user = await Users.findOne({ _id: payload.sub });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false)
    }

  } catch (error) {
    done(error, null)
  }

})
// TODO
export default (passport) => {
  passport.use(strategy)
}
