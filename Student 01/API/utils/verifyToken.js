// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config()

// const verifyToken = (req,res,next) => {
//     const token = req.cookies.access_token;
//     const err = new Error()
//     if(!token){
//         err.status = 401;
//          err.message ="you are not authenticated!";
//         return next(err);
//     }
//     jwt.verify(token.process.env.JWT,(err,user) =>{
//         if(err) {
//             err.status = 403;
//          err.message ="token not valid!";
//         return next(err);
//         }
//         req.user = user;
//         next()
//     })
// }

// module.exports = verifyToken;