const router = require("express").Router();

const {
  login,
  auth,
  logout,
  logoutAll } = require("../controllers/authController");


const {loginFacebook,facebookAuthHandler} = require("../controllers/facebookHandler");
const {loginGoogle,googleAuthHandler} = require("../controllers/googleHandler");
const {loginGithub,githubAuthHandler} = require("../controllers/githubHandler");

router.get("/github", loginGithub);
router.get("/github/authorized", githubAuthHandler); 
router.get("/google", loginGoogle);
router.get("/google/authorized", googleAuthHandler);  
router.get("/facebook", loginFacebook);
router.get("/facebook/authorized", facebookAuthHandler);  
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/logout/all", auth, logoutAll);

module.exports = router;