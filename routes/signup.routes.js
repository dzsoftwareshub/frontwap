const express = require("express");
const router = express.Router();

const tokenService = require("../services/token.service");
const httpService = require("../services/http.service");

router.post("/",async (request,response)=>{
  const expiresIn = 120;
  const token = await tokenService.createToken(request,response,expiresIn);

  httpService.postRequest(token);
});

module.exports = router;
