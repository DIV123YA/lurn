const express = require("express");
const router = express.Router();
const {register, login, welcome} = require("../controllers/userController.js");
const verifyToken = require("../middleware/tokenVarification.js");

router.post("/register", register);
router.post("/login", login);
router.get("/welcome", verifyToken, welcome);

module.exports = router;
