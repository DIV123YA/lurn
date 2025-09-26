const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../models');   // this loads index.js
const User = db.User;              // access the model


// @desc    Register new user
// @route   POST /auth/register
// @access  Public
const register = asyncHandler(async (req, res) => {
  try {
    const { email, password, userId } = req.body;

    if (!email || !password || !userId) {
      return res.status(400).json({ message: "Email, UserId and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      userId,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, email: user.email, userId: user.userId},
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// @desc    Login user
// @route   POST /auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "myHardcodedSecret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});


const welcome = asyncHandler(async (req, res) => {
    try{
        return res.status(200).json({message: "welcome to lurn"});
    } catch(err){
        res.status(500);
        throw new Error(err.message);
        }    
});

module.exports = { register, login, welcome};
