const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
   const realToken = token.split(" ");
   const jwtToken = realToken[1];
   const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

   if(decodedValue.username){
    req.username = decodedValue.username
    next();
   } else{
    res.json({
        msg: "You are not authenticated"
    })
   }

}

module.exports = userMiddleware;