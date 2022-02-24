require("dotenv").config();
const express = require("express");
const router = express.Router();
const secretkey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");


router.post("/",(request,response)=>{
    const formdata = request.body;
    const token = jwt.sign({
      iss: "",
      data: formdata
    },secretkey,{expiresIn: 120});
    console.log(token);
});

module.exports = router;
