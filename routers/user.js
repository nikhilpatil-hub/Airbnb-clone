const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl, varifyEmail, validateUser } = require("../middleware");

const userController = require("../controllers/users");

router.route("/signup")
  .get(userController.renderSignupForm)
  .post(varifyEmail, validateUser, wrapAsync(userController.signUser));

router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.loginUser)
  );

router.get("/logout", userController.logoutUser);

router.get("/", (req, res) => {
  res.redirect("/listings");
});

module.exports = router;