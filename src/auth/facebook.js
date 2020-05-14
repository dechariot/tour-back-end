const strategy = require("passport-facebook");
const FacebookStrategy = strategy.Strategy;
require("dotenv").config({ path: ".env" });

module.exports = new FacebookStrategy(
  //1st arg is configuration
  {
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: process.env.FB_CB,
    profileFields: ["id", "email", "name"],
  },
  function (accessToken, refreshToken, profile, next) {
    console.log(profile);

    // todo

    next(null, profile);
  }
);
