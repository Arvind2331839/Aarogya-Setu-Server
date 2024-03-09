const express = require('express');
const router = express.Router();
const { UserModel } = require("../Schema/UserSchema");

router.post("/register",async(req, res) => {

    try {
     //get all data from
        const {Contact,Fever,Headache,Traveled,Symptoms,FullName,CompleteAddress, Email, MobileNumber,Age,Gender} = req.body;
        console.log(req.body)
    
        //all data should exists
        if (!Contact || !Fever || !Headache || !Traveled ||!Symptoms || !FullName || !CompleteAddress || !Email || !MobileNumber ||! Age || !Gender ) {
          res.status(400).send({status:false,messsage:'All feilds are compalsory'});
          console.log('All feilds are compalsory')
           return true
        }
    ``
        //check if user already exists - email
        const existingUser = await UserModel.findOne({ Email });
        if (existingUser) {
          res.status(400).send({status:false,messsage:"User already exists with this email"});
        } else {
        
          //save the user in DB
          const User = await UserModel.create({Contact,Fever,Headache,Traveled,Symptoms,FullName,CompleteAddress,Email,MobileNumber,Age,Gender});
         res.status(201).json(User)
               } 
               

        }catch(error){
            console.log(error);
         }
        });

module.exports = router;


