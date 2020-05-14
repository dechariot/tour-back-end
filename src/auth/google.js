const strategy = require("passport-google-oauth20");
const googleStrategy = strategy.Strategy
const User = require("../models/user")
require("dotenv").config({ path: ".env" });

module.exports = new googleStrategy(
    //1st arg is configuration
    {
        clientID: process.env.GG_ID,
        clientSecret: process.env.GG_SECRET,
        callbackURL: process.env.GG_CB,
        profileFields: ["id", "email", "name"]
    },
    async function(accessToken, refreshToken, profile, cb) {
        const {name,email} = profile._json;
        const user = await User.findOneOrCreate({name,email})
        // console.log(profile)
        // todo
    
        cb(null, user);
      }
)