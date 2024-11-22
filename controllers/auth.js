const prisma = require("../config/prisma")
const bcryptjs =require("bcryptjs")
const jwt =require('jsonwebtoken')
const createError = require("../utils/create-error")



// const joi =require("joi")
// const schema = joi.object({
//     email: joi.string().required().email()
// })


exports.register = async (req,res,next) =>{
    try {
        //Code
        console.log("----------------------------------")
        const {email,password,confirmPassword} =req.input;
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        if (user){
            return createError(400, "Email is already exist")
        }
        
        //1.Validate req.body ******joi
        // if(!email){
        //     return createError(400, "Email is require!!")
        // }

        // if(!password){
        //     return createError (400,"Password is required")
        // }
        //2.Check Email already exits
        // const user = await prisma.user.findUnique({
        //     where:{
        //         email: email
        //     }
        // })
        // if(user){
        //     return createError(400,"Email is already exits")
        // }

        
        //3.Encrypt password with bcryptjs
        const hashPassword = await bcryptjs.hash(password, 10)
        //4.Register success
         const newUser =await prisma.user.create({
            data:{
                email:email,
                password:hashPassword,
            }
         })
        console.log(newUser)
        res.json({message: 'Register Successfully'})
    } catch (err) {
        //err
        console.log(err)
        next(err)
    }
}
exports.login = async (req,res,next) =>{
    try {
        //code
        //1 Validate with *** joi
        const{email,password} = req.body
        console.log(email,password)
        if(!email){
            return createError(400,"Email is required!!!")
        }
        if(!password){
            return createError(400,"Password is required!!!")
        }
        //2 Check Email in DB (already exits)
        const user =  await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        if(!user){
            return createError(400,'Email is not invalid!!!')
        }
        //3 Check Password is match
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!isMatch){
            return createError(400,"Password is not match!!!")
        }
        //4 Create Payload
        const payload = {
            user:{
                id: user.id,
                email: user.email,
                role: user.role
            }
        }
        //5 generate Token
        const genToken = jwt.sign(payload,process.env.SECRET,{
            expiresIn: "1d"
        })
        console.log(genToken)

        //6 Send to fronted
        res.json({
            user: payload,
            token: genToken,
        })
        
    } catch (err) {
        //err
        console.log(err)
        next(err)
    }
}

exports.currentUser = async (req,res,next) => {
    try {
        //code
        const email =req.user.email
        const member = await prisma.user.findFirst({
            where:{
                email: email
            },
            select:{
                id:true,
                email:true,
                role:true
            }
        })
        console.log(member)
        res.json({member})
    } catch (err) {
        //err
        next(err)       
    }
}