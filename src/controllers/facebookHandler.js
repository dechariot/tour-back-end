const passport = require("passport");


exports.loginFacebook = passport.authenticate("facebook");

exports.facebookAuthHandler = function(req, res, next) {
    passport.authenticate("facebook", function(err, user) {
      // if any error during the process, redirect user back to front end login page
      if (err) return res.send("ERROR");
      // if authentication succeeds, redirect user to successful front end page with a token
      return res.send(user)
    })(req, res, next);
  };
  