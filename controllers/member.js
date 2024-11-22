const { number } = require("joi")
const prisma = require("../config/prisma")


exports.listMember = async (req,res,next) =>{
    try {
        //code
        const member = await prisma.user.findMany({
            select:{
                id:true,
                email:true,
                role: true,
                updatedAt:true

            }
        })
        res.json(member) 
    } catch (err) {
        //err
        console.log(err)
        next(err)
    }
}
exports.updateMember = async (req,res,next) =>{
    try {
        //code
        const {memberId} =req.params
        const{role} = req.body
        
        const member = await prisma.user.update({
            where:{
                id:Number(memberId)
            },
            data:{
                role: role
            }
        }) 


        console.log(role)
        res.json({message: 'Update Success!!'}) 
    } catch (err) {
        //err
        // console.log(err)
        next(err)
    }
}
exports.removeMember = async (req,res,next) =>{
    try {
        const {memberId} =req.params
        const member =await prisma.user.delete({
            where:{
                id: Number(memberId)
            }
        })
        console.log(memberId)
        res.json({message: 'Delete Success!!'}) 
    } catch (err) {
        //err
        console.log(err)
        next(err)
    }
}
