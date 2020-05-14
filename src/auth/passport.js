const passport = require("passport");
const FacebookStrategy = require("./facebook");
const googleStrategy = require("./google");
const githubStrategy = require("./github")


passport.use(FacebookStrategy);
// you can add more plugins here

passport.use(googleStrategy);

passport.use(githubStrategy);

module.exports = passport;
