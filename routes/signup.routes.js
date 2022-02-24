const express = require("express");
const router = express.Router();

router.post("/",(request,response)=>{
  response.json({
    message: "Success",
    data: request.body
  });
});

module.exports = router;
