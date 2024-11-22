const jwt = require("jsonwebtoken")
const createError = require("../utils/create-error")

exports.auth = (req,res,next) => {
    try {
        //code
        // Step 1 check headers
    
        const authHeader = req.headers.authorization
        // ถ้าไม่มี token ส่งมากับ header
        if(!authHeader){
            return createError(401, "Token missing")
        }
        const token = authHeader.split(" ")[1]
        
        console.log(token)
        // Step 2 Decode
        jwt.verify(token, process.env.SECRET,(err,decode)=>{
            //code
            if(err){
                return createError(400, "Token Invalid")
            }
         console.log("decode",decode)
            req.user = decode.user
            next()
        })



        // Step 3 Next
        
    } catch (err) {
        //err
        next(err)
    }
}