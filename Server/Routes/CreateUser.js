const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../model/User");

const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtsecret="MyNameisEndToEnd"

router.post(
  "/CreateUser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
// Login Credentials data

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const email = req.body.email;
    try {
      const user = await User.findOne({ email }); // Correct usage of findOne
      if (!user) {
        return res.status(400).json({ error: "Try Login with correct email" });
      }

      // Compare passwords using !==
      const pwdCompare=await bcrypt.compare(req.body.password,user.password)
      if (!pwdCompare) {
        return res.status(400).json({ error: "Try Login with correct password" });
      }
      const data={
        users1:{
          id:User.id
        }
      }
      const authToken=jwt.sign(data,jwtsecret)
      return res.json({ success: true,authToken :authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
