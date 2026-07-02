const express = require("express");
const router = express.Router();

const { register, login, getProfile } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getProfile);

router.get("/test", (req, res) => {
  res.send("Auth route is working");
});

// For testing temparory
// router.post("/register", (req, res) => {
//   console.log("Register API Hit");
//   res.send("Success");
// });

module.exports = router;