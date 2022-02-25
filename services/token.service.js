require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretkey = process.env.SECRET_KEY;

const create = async (request,response,expiresIn)=>{
  const formdata = request.body;
  const endpoint = request.get("origin");
  const api = request.originalUrl;
  const iss = endpoint+api;
  const token = await jwt.sign({
    iss: iss,
    data: formdata,
  },secretkey,{expiresIn: expiresIn});
  return token;
}

const verify = ()=>{

}

module.exports = {
  createToken : create,
  verifyToken : verify
}
