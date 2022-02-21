const express = require("express");
const router = express.Router();

router.get("/",(request,response)=>{
  response.send("Get request");
});

router.post("/",(request,response)=>{
  response.send("Post request");
});

module.exports = router;
