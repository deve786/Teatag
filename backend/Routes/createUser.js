const express =require('express')
const router=express.Router()
const User=require('../Models/userModel')
const {body,validationResult} =require('express-validator')

router.post('/createuser',
body('email','Invalid Email address').isEmail(),
body('name','Name have morethan 2 characters').isLength({min:3}),
body('password','Password have morethan 4 characters').isLength({min:5})
,async(req,res)=>{

    const result = validationResult(req);
  if (!result.isEmpty()) {
        return res.status(400).json({errors: result.array()} );
  }

  

    try {
        await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password
    
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router;