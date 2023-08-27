const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");
const jwt=require('jsonwebtoken')
const { body, validationResult } = require("express-validator");
const jwtSecret='abcd564'
const bcrypt=require('bcryptjs')
router.post(
  "/createuser",
  body("email", "Invalid Email address").isEmail(),
  body("name", "Name have morethan 2 characters").isLength({ min: 3 }),
  body("password", "Password have morethan 4 characters").isLength({ min: 5 }),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const salt=await bcrypt.genSalt(10) 
    let secPass=await bcrypt.hash(req.body.password,salt)
    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPass,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email", "Invalid Email address").isEmail(),
  body("password", "Password have morethan 4 characters").isLength({ min: 5 }),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
        
      let  email  = req.body.email;
      
      let userData = await User.findOne({ email });
      if (!userData) {
        res.status(400).json({ errors: "Error in credentials1" });
      }
      const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
      if(!pwdCompare){
        res.status(400).json({ errors: "Error in credentials2" });
      }
      const data={
        user:{
            id:userData.id
        }
      }
      const authToken=jwt.sign(data,jwtSecret)
      res.json({ success: true,authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
