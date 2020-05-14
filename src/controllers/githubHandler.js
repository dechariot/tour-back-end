const passport = require("passport");


exports.loginGithub = passport.authenticate("github");

exports.githubAuthHandler = function(req, res, next) {
    passport.authenticate("github", function(err, user) {
      // if any error during the process, redirect user back to front end login page
      if (err) return res.send("ERROR");
      // if authentication succeeds, redirect user to successful front end page with a token
      return res.send(user)
    })(req, res, next);
  };
  