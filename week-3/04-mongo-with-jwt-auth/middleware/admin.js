const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken")

// Middleware for handling auth
async function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
   const token = req.headers.authorization;
   const realToken = token.split(" ");
   const jwtToken = realToken[1];
   const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

   if(decodedValue.username){
    next();
   } else{
    res.json({
        msg: "You are not authenticated"
    })
   }


}

module.exports = adminMiddleware;