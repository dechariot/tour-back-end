const strategy = require("passport-github");
const githubStrategy = strategy.Strategy
require("dotenv").config({ path: ".env" });

module.exports = new githubStrategy(
    //1st arg is configuration
    {
        clientID: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: process.env.GITHUB_CB,
        profileFields: ["id", "email", "name"]
    },
    function(accessToken, refreshToken, profile, next) {
        console.log(profile);
    
        // todo
    
        next(null, profile);
      }
)