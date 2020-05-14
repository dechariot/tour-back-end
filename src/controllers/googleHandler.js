const passport = require("passport");


exports.loginGoogle = passport.authenticate("google",{ scope: ['email','profile'] });

exports.googleAuthHandler = function(req, res, next) {
    passport.authenticate("google", function(err, user) {
      // if any error during the process, redirect user back to front end login page
      if (err) return res.redirect("https://localhost:3000/login");
      // if authentication succeeds, redirect user to successful front end page with a token
      console.log(user)
      return res.redirect(`https://localhost:3000/?token=${user.tokens[user.tokens.length-1]}`);
    })(req, res, next);
  };
  
  ///FIND MONGODB